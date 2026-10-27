"""Uniqueness of every city / city x service page.

For each page we take two views of its text:
  own  = text inside elements marked data-own (quick answer, body, FAQ): what the page
         itself says
  main = everything inside <main> (adds the repeated site modules: reviews, map,
         trust cards, related links)
A page's uniqueness is the share of its 8-word runs (shingles) that appear on NO other
page of the site (all pages are compared, not a sample).

usage: python measure.py http://localhost:3115 [--only slug,slug] [--json out.json]
"""
import re, sys, json, html, urllib.request
from collections import Counter

try:
    from bs4 import BeautifulSoup
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "beautifulsoup4"])
    from bs4 import BeautifulSoup

N = 8


def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=60).read().decode("utf8", "ignore")


def words(t):
    t = html.unescape(t).lower()
    t = re.sub(r"[^a-z0-9$%.,'\- ]+", " ", t)
    t = re.sub(r"[.,]", " ", t)
    return t.split()


def shingles(w):
    return {" ".join(w[i:i + N]) for i in range(len(w) - N + 1)}


def texts(htmltxt):
    soup = BeautifulSoup(htmltxt, "html.parser")
    for s in soup(["script", "style", "noscript"]):
        s.decompose()
    main = soup.find("main") or soup.body
    own_nodes = main.select("[data-own]")
    # top-most data-own nodes only (avoid double counting nested ones)
    top = [n for n in own_nodes if not any(p in own_nodes for p in n.parents)]
    own = " ".join(n.get_text(" ", strip=True) for n in top)
    return own, main.get_text(" ", strip=True)


def urls_from_sitemap(base):
    sm = fetch(base + "/sitemap.xml")
    paths = re.findall(r"<loc>https?://[^/]+(/cities/[^<]*)</loc>", sm)
    return paths


def all_city_urls(base, cities_path):
    # every city and city x service page, whether or not it is in the sitemap
    src = open(cities_path, encoding="utf8").read()
    block = src.split("const cityData", 1)[1].split("];", 1)[0]
    slugs = [re.sub(r"[^a-z0-9]+", "-", n.lower()).strip("-") for n in re.findall(r'\{ name: "([^"]+)"', block)]
    svc = ["heating-installation-repair", "air-conditioning-installation-repair", "heat-pumps-ductless-mini-splits", "hvac-maintenance-tune-ups", "indoor-air-quality"]
    out = []
    for s in slugs:
        out.append(f"/cities/{s}")
        out += [f"/cities/{s}/{x}" for x in svc]
    return out


if __name__ == "__main__":
    base = sys.argv[1]
    cities_path = "src/data/cities.ts"
    paths = all_city_urls(base, cities_path)
    pages = {}
    for p in paths:
        try:
            own, main = texts(fetch(base + p))
        except Exception as e:  # noqa
            print("skip", p, e)
            continue
        pages[p] = {"own": words(own), "main": words(main)}
    res = {}
    for view in ("own", "main"):
        sh = {p: shingles(v[view]) for p, v in pages.items()}
        cnt = Counter(s for S in sh.values() for s in S)
        for p, S in sh.items():
            uniq = sum(1 for s in S if cnt[s] == 1)
            res.setdefault(p, {})[view + "_words"] = len(pages[p][view])
            res[p][view + "_unique_pct"] = round(100 * uniq / len(S), 1) if S else None
    json.dump(res, open("measure_out.json", "w"), indent=1)
    only = None
    if "--only" in sys.argv:
        only = set(sys.argv[sys.argv.index("--only") + 1].split(","))
    print(f"{'page':62} {'own words':>9} {'own uniq%':>9} {'main uniq%':>10}")
    for p, r in res.items():
        slug = p.split("/")[2]
        if only and slug not in only:
            continue
        if r["own_words"] == 0 and not only:
            continue
        print(f"{p:62} {r['own_words']:9d} {str(r['own_unique_pct']):>9} {str(r['main_unique_pct']):>10}")
