"""Turn facts/<slug>.json into computed metrics, ranks among the cities, and a markdown fact sheet.
Everything a writer may state must be in the sheet (or in GLOBAL below)."""
import json, glob, os, re, sys

NG = set(json.load(open("ng_towns.json"))["national_grid"])
# municipal / other utilities already in src/data/cities.ts (verified earlier by the research pack)
OTHER_UTIL = {
    "hudson": "Hudson Light & Power Department (municipal)", "stow": "Hudson Light & Power Department (municipal)",
    "concord": "Concord Municipal Light Plant (municipal)", "wellesley": "Wellesley Municipal Light Plant (municipal)",
    "littleton": "Littleton Electric Light & Water Department (municipal)", "boxborough": "Littleton Electric Light & Water Department (municipal)",
    "shrewsbury": "Shrewsbury Electric & Cable Operations, SELCO (municipal)", "holden": "Holden Municipal Light Department (municipal)",
    "sterling": "Sterling Municipal Light Department (municipal)", "boylston": "Boylston Municipal Light Department (municipal)",
    "west-boylston": "West Boylston Municipal Lighting Plant (municipal)", "groton": "Groton Electric Light Department (municipal)",
    "lunenburg": "Unitil (investor-owned)",
}


def n(d, k):
    v = d.get(k)
    return int(v) if v not in (None, "") else 0


def metrics(rec):
    a = rec["acs"]
    f, y, t, u = a["B25040"], a["B25034"], a["B25003"], a["B25024"]
    occ = n(f, "B25040_001E")
    units = n(y, "B25034_001E")
    pct = lambda x, tot: round(100.0 * x / tot, 1) if tot else None
    m = {
        "pop": n(a["B01003"], "B01003_001E"),
        "units": units,
        "occupied": n(a["B25002"], "B25002_002E"),
        "vacant": n(a["B25002"], "B25002_003E"),
        "median_year": n(a["B25035"], "B25035_001E"),
        "median_value": n(a["B25077"], "B25077_001E"),
        "owner": n(t, "B25003_002E"), "renter": n(t, "B25003_003E"),
    }
    m["owner_pct"] = pct(m["owner"], occ); m["renter_pct"] = pct(m["renter"], occ)
    m["vacancy_pct"] = pct(m["vacant"], units)
    fuel = {"gas": n(f, "B25040_002E"), "lp": n(f, "B25040_003E"), "elec": n(f, "B25040_004E"), "oil": n(f, "B25040_005E"),
            "wood": n(f, "B25040_007E"), "solar": n(f, "B25040_008E"), "other": n(f, "B25040_009E") + n(f, "B25040_006E"), "none": n(f, "B25040_010E")}
    m["fuel_total"] = occ
    for k, v in fuel.items():
        m[k] = v; m[k + "_pct"] = pct(v, occ)
    yb = {"pre1940": n(y, "B25034_011E"), "y1940_59": n(y, "B25034_010E") + n(y, "B25034_009E"),
          "y1960_79": n(y, "B25034_008E") + n(y, "B25034_007E"), "y1980_99": n(y, "B25034_006E") + n(y, "B25034_005E"),
          "y2000plus": n(y, "B25034_004E") + n(y, "B25034_003E") + n(y, "B25034_002E")}
    for k, v in yb.items():
        m[k] = v; m[k + "_pct"] = pct(v, units)
    pre80 = yb["pre1940"] + yb["y1940_59"] + yb["y1960_79"]
    m["pre1980"] = pre80; m["pre1980_pct"] = pct(pre80, units)
    m["since2010"] = n(y, "B25034_003E") + n(y, "B25034_002E"); m["since2010_pct"] = pct(m["since2010"], units)
    st = {"detached": n(u, "B25024_002E"), "attached": n(u, "B25024_003E"), "two": n(u, "B25024_004E"), "three_four": n(u, "B25024_005E"),
          "five_plus": sum(n(u, f"B25024_00{i}E") for i in (6, 7, 8, 9)), "mobile": n(u, "B25024_010E")}
    tot = n(u, "B25024_001E")
    for k, v in st.items():
        m["st_" + k] = v; m["st_" + k + "_pct"] = pct(v, tot)
    m["multi"] = st["two"] + st["three_four"] + st["five_plus"]; m["multi_pct"] = pct(m["multi"], tot)
    return m


RANKED = [("oil_pct", "highest share of homes heated with fuel oil"), ("gas_pct", "highest share heated with utility gas"),
          ("elec_pct", "highest share heated with electricity"), ("lp_pct", "highest share heated with bottled/tank (LP) gas"),
          ("renter_pct", "highest share of renter households"), ("pre1940_pct", "highest share of homes built in 1939 or earlier"),
          ("pre1980_pct", "highest share of homes built before 1980"), ("since2010_pct", "highest share of homes built since 2010"),
          ("median_value", "highest median home value"), ("multi_pct", "highest share of homes in multi-unit buildings"),
          ("st_detached_pct", "highest share of single-family detached homes"), ("vacancy_pct", "highest vacancy rate"), ("pop", "largest population")]


def build(only=None):
    recs = {}
    for p in sorted(glob.glob("facts/*.json")):
        r = json.load(open(p, encoding="utf8"))
        if "acs" in r and "error" not in r["acs"].get("B25040", {}):
            recs[r["slug"]] = r
    M = {s: metrics(r) for s, r in recs.items()}
    N = len(M)
    ranks = {}
    for key, _ in RANKED:
        order = sorted(M, key=lambda s: (M[s][key] is None, -(M[s][key] or 0)))
        for i, s in enumerate(order):
            ranks.setdefault(s, {})[key] = i + 1
    # median year: 1 = oldest
    order = sorted(M, key=lambda s: M[s]["median_year"])
    for i, s in enumerate(order):
        ranks[s]["median_year_oldest"] = i + 1
    return recs, M, ranks, N


def utility(slug, name):
    if name in NG:
        return "National Grid (confirmed: town appears in National Grid's official Massachusetts Electric Company territory list)"
    if slug in OTHER_UTIL:
        return OTHER_UTIL[slug]
    return "NOT CONFIRMED. Do not name the electric utility; say only that rebates run through the utility that serves the address."


def sheet(slug, recs, M, ranks, N):
    r, m, k = recs[slug], M[slug], ranks[slug]
    L = [f"# Fact sheet: {r['name']}, MA ({r['county']} County)", f"Source of every number below: U.S. Census Bureau, ACS {r['acs_year']} 5-year estimates (data.census.gov), town GEOID {r['geoid']}. Ranks compare the {N} MetroWest towns Mass HVAC serves (1 = highest).", ""]
    L += ["## Population and housing",
          f"- Population: {m['pop']:,}", f"- Housing units: {m['units']:,} ({m['occupied']:,} occupied, {m['vacant']:,} vacant, vacancy {m['vacancy_pct']}%)",
          f"- Owner-occupied households: {m['owner']:,} ({m['owner_pct']}%); renter-occupied: {m['renter']:,} ({m['renter_pct']}%)",
          f"- Median year homes were built: {m['median_year']}; median value of owner-occupied homes: ${m['median_value']:,}", ""]
    L += ["## How homes are heated (share of occupied homes)",
          f"- Utility gas: {m['gas']:,} homes ({m['gas_pct']}%)", f"- Fuel oil/kerosene: {m['oil']:,} ({m['oil_pct']}%)",
          f"- Electricity: {m['elec']:,} ({m['elec_pct']}%)", f"- Bottled/tank (LP) gas: {m['lp']:,} ({m['lp_pct']}%)",
          f"- Wood: {m['wood']:,} ({m['wood_pct']}%); solar: {m['solar']:,}; other fuel/coal: {m['other']:,}; none: {m['none']:,}", ""]
    L += ["## Age of homes (share of all housing units)",
          f"- 1939 or earlier: {m['pre1940']:,} ({m['pre1940_pct']}%)", f"- 1940 to 1959: {m['y1940_59']:,} ({m['y1940_59_pct']}%)",
          f"- 1960 to 1979: {m['y1960_79']:,} ({m['y1960_79_pct']}%)", f"- 1980 to 1999: {m['y1980_99']:,} ({m['y1980_99_pct']}%)",
          f"- 2000 or later: {m['y2000plus']:,} ({m['y2000plus_pct']}%); built 2010 or later: {m['since2010']:,} ({m['since2010_pct']}%)",
          f"- Built before 1980 (sum of the first three bands): {m['pre1980']:,} ({m['pre1980_pct']}%)", ""]
    L += ["## Type of home (share of housing units)",
          f"- Single-family detached: {m['st_detached']:,} ({m['st_detached_pct']}%); attached (townhouse): {m['st_attached']:,} ({m['st_attached_pct']}%)",
          f"- 2-unit buildings: {m['st_two']:,} ({m['st_two_pct']}%); 3-4 units: {m['st_three_four']:,} ({m['st_three_four_pct']}%); 5+ units: {m['st_five_plus']:,} ({m['st_five_plus_pct']}%)",
          f"- Mobile homes: {m['st_mobile']:,} ({m['st_mobile_pct']}%); all multi-unit buildings together: {m['multi']:,} ({m['multi_pct']}%)", ""]
    L += [f"## Rank among the {N} towns (1 = highest)"]
    for key, label in RANKED:
        L.append(f"- {label}: #{k[key]} of {N}")
    L.append(f"- Oldest median year built: #{k['median_year_oldest']} of {N} (1 = oldest)")
    # most distinctive facts: ranks in the top 8 or bottom 8 of the towns
    ext = []
    for key, label in RANKED:
        rk = k[key]
        if rk <= 8:
            ext.append((rk - 1, f"{label} (#{rk} of {N})"))
        elif rk >= N - 7:
            ext.append((N - rk, f"one of the LOWEST for: {label} (#{rk} of {N})"))
    ext.sort()
    L += ["", "## Suggested angles (this town's most distinctive facts: build the story around 2 or 3 of them)"]
    L += [f"- {t}" for _, t in ext[:6]] or ["- This town is close to the middle on most measures; lean on its Wikipedia history/geography and its utility."]
    import statistics
    med = lambda key: statistics.median([x[key] for x in M.values() if x.get(key) is not None])
    L += ["", f"## Context: median of the {N} towns (the middle town)",
          f"- Fuel oil heating: {med('oil_pct'):.1f}%; utility gas: {med('gas_pct'):.1f}%; electricity: {med('elec_pct'):.1f}%; LP gas: {med('lp_pct'):.1f}%",
          f"- Renter households: {med('renter_pct'):.1f}%; homes in multi-unit buildings: {med('multi_pct'):.1f}%; single-family detached: {med('st_detached_pct'):.1f}%",
          f"- Built before 1980: {med('pre1980_pct'):.1f}%; built in 1939 or earlier: {med('pre1940_pct'):.1f}%; built since 2010: {med('since2010_pct'):.1f}%",
          f"- Median year built: {int(med('median_year'))}; median home value: ${int(med('median_value')):,}; vacancy rate: {med('vacancy_pct'):.1f}%"]
    L += ["", "## Electric utility", f"- {utility(slug, r['name'])}", ""]
    L += ["## Wikipedia (history/geography only; ignore any old census figures in it)", f"URL: {r['wikipedia'].get('url')}", "", clean_wiki(r["wikipedia"].get("text", ""))]
    out = "\n".join(L)
    if os.path.exists(f"extras/{slug}.md"):
        out += "\n" + open(f"extras/{slug}.md", encoding="utf8").read()
    return out


def clean_wiki(t, limit=9000):
    t = re.split(r"\n== (?:References|External links|See also|Further reading|Notes|Bibliography)", t)[0]
    # drop the demographics section: it holds outdated (2000/2010) census figures
    t = re.sub(r"\n== Demographics ==.*?(?=\n== )", "\n", t, flags=re.S)
    return t.strip()[:limit]


if __name__ == "__main__":
    recs, M, ranks, N = build()
    os.makedirs("sheets", exist_ok=True)
    json.dump({"metrics": M, "ranks": ranks, "n": N}, open("metrics.json", "w"), indent=1)
    for s in recs:
        open(f"sheets/{s}.md", "w", encoding="utf8").write(sheet(s, recs, M, ranks, N))
    print("fichas:", N)
