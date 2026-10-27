"""validate.py content/<slug>.json sheets/<slug>.md   -> exits 1 on ERROR"""
import json, re, sys

SERVICES = ["heating-installation-repair", "air-conditioning-installation-repair", "heat-pumps-ductless-mini-splits", "hvac-maintenance-tune-ups", "indoor-air-quality"]
BANNED = ["delve", "leverage", "robust", "seamless", "comprehensive", "nestled", "bustling", "vibrant", "tapestry", "state-of-the-art", "top-notch",
          "cutting-edge", "look no further", "rest assured", "whether you", "in today's", "second to none", "game-changer", "world-class", "unparalleled"]
BAD_COMPANY = ["years of experience", "years in business", "family-owned", "family owned", "award", "certified", "nate ", "factory-trained", "thousands of",
               "mass save installer", "mass save contractor", "mass save-certified", "mass save certified", "preferred contractor", "we've served", "we have served",
               "same-day", "same day", "within an hour", "satisfaction guarantee", "warranty", "financing"]
STOCK_OPEN = ["is a town in", "homes in ", "if you live in", "when it comes to"]
# numbers that are always allowed (global facts and small counts)
GLOBAL_NUM = {"2026", "2027", "28", "2650", "8500", "1000", "2013", "2000", "68", "64", "7", "11", "24", "105", "410", "201", "508", "786", "8755", "1", "2", "3", "4", "5", "6", "8", "9", "10", "100", "15", "14", "30", "1980", "2022", "2025", "1125", "31", "410.201"}
GLOBAL_WORDS = set("""Mass HVAC Inc Milford MA Massachusetts MetroWest Mass Save National Grid American Community Survey Census Bureau ACS Home Energy Assessment
Massachusetts State Sanitary Code Housing and Urban January February December September June Monday Tuesday Wednesday Thursday Friday Saturday Sunday
March April May July August October November EPA DOE Wikipedia English FAQ HVAC AC IAQ LP""".split())


def words(s):
    return len(re.findall(r"[A-Za-z0-9$%'-]+", s))


def alltext(c):
    parts = [c["quickAnswer"]] + c["body"] + [x for f in c["faq"] for x in (f["q"], f["a"])]
    for s in SERVICES:
        v = c["services"].get(s, {})
        parts += [v.get("quickAnswer", "")] + v.get("body", []) + [x for f in v.get("faq", []) for x in (f["q"], f["a"])]
    return "\n".join(parts)


def nums(s):
    out = set()
    for m in re.finditer(r"\$?\d[\d,]*(?:\.\d+)?", s):
        t = m.group(0).replace("$", "").replace(",", "").rstrip(".")
        out.add(t)
        if t.endswith(".0"):
            out.add(t[:-2])
    return out


def main(cp, sp):
    c = json.load(open(cp, encoding="utf8")); sheet = open(sp, encoding="utf8").read()
    err, warn = [], []
    slug = c.get("slug")
    if slug != cp.split("/")[-1].split(".")[0]:
        err.append("slug does not match file name")
    for k in ("quickAnswer", "body", "faq", "services", "sources"):
        if k not in c:
            err.append(f"missing key {k}")
    if err:
        return err, warn
    # shape and size
    wc = words(" ".join(c["body"]))
    if not 560 <= wc <= 900: err.append(f"city body {wc} words (want 600-800)")
    if not 25 <= words(c["quickAnswer"]) <= 70: err.append(f"city quickAnswer {words(c['quickAnswer'])} words (want 30-60)")
    if len(c["faq"]) != 4: err.append(f"city faq has {len(c['faq'])} items (want 4)")
    if not any("|" in b and "\n" in b for b in c["body"]): warn.append("city body has no one-element table")
    for b in c["body"]:
        if "|" in b and "\n" not in b and b.strip().startswith("|"):
            err.append("a table row is a separate array element (rows must be joined with \\n in ONE element)")
    for s in SERVICES:
        v = c["services"].get(s)
        if not v:
            err.append(f"missing service {s}"); continue
        w = words(" ".join(v["body"]))
        if not 250 <= w <= 420: err.append(f"{s} body {w} words (want 280-380)")
        if not 22 <= words(v["quickAnswer"]) <= 60: err.append(f"{s} quickAnswer {words(v['quickAnswer'])} words (want 25-50)")
        if not 2 <= len(v["faq"]) <= 3: err.append(f"{s} faq has {len(v['faq'])} items (want 2-3)")
    if len(c["sources"]) < 2: err.append("need at least 2 sources")
    t = alltext(c)
    low = t.lower().replace("comprehensive plan", "")  # a proper name, not the hype word
    if "—" in t: err.append("contains an em dash (use comma/colon/period)")
    for b in BANNED:
        if b in low: err.append(f"banned word/phrase: {b!r}")
    for b in BAD_COMPANY:
        if b in low: err.append(f"unverified company claim: {b!r}")
    for b in STOCK_OPEN:
        n_ = sum(1 for p in c["body"] + [c["quickAnswer"]] if p.lower().startswith(b))
        if n_: warn.append(f"stock opening {b!r}")
    # numbers must exist in the sheet or global list
    allowed = nums(sheet) | GLOBAL_NUM
    bad = sorted(n_ for n_ in nums(t) if n_ not in allowed)
    if bad: err.append("numbers not in the fact sheet: " + ", ".join(bad[:25]))
    # proper nouns (capitalised words not at sentence start) not in the sheet
    sheet_words = set(re.findall(r"[A-Za-z][A-Za-z'-]+", sheet)) | GLOBAL_WORDS
    unk = set()
    for sent in re.split(r"(?<=[.!?])\s+|\n+", t):
        toks = re.findall(r"[A-Za-z][A-Za-z'-]*", sent)
        for i, w in enumerate(toks):
            if i == 0 or not w[0].isupper() or w.isupper(): continue
            if w not in sheet_words and w.lower() not in {x.lower() for x in sheet_words}:
                unk.add(w)
    if unk: warn.append("capitalised words not in the sheet (check they are not invented): " + ", ".join(sorted(unk)[:30]))
    # internal links must be real
    for m in re.finditer(r"\]\((/[^)\s]+)\)", t):
        u = m.group(1)
        if not re.match(rf"^/(cities/{slug}(/({'|'.join(SERVICES)}))?|services/({'|'.join(SERVICES)})|projects/[a-z0-9-]+|cities/[a-z-]+)$", u): err.append(f"suspicious link {u}")
    return err, warn


if __name__ == "__main__":
    e, w = main(sys.argv[1], sys.argv[2])
    for x in e: print("ERROR  ", x)
    for x in w: print("WARNING", x)
    print("OK" if not e else f"{len(e)} error(s)")
    sys.exit(1 if e else 0)
