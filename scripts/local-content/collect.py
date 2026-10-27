"""Collect verifiable town facts for every city in cities.ts.

Sources (all keyless, public):
  - Census TIGERweb  -> official GEOID of each town (county subdivision)
  - data.census.gov  -> ACS 2022 5-year tables for that GEOID
  - Wikipedia        -> plain-text article (history, geography, villages, landmarks)
Output: facts/<slug>.json  (raw, with the URL each value came from)
"""
import json, re, sys, time, urllib.parse, urllib.request, os

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36"
COUNTY_FIPS = {"Middlesex": "017", "Worcester": "027", "Norfolk": "021", "Suffolk": "025", "Essex": "009"}
ACS_YEAR = 2022
TABLES = {
    "B25040": "house heating fuel",
    "B25034": "year structure built",
    "B25003": "tenure",
    "B25024": "units in structure",
    "B25035": "median year structure built",
    "B25077": "median value owner-occupied",
    "B25001": "housing units",
    "B01003": "total population",
    "B25002": "occupancy status",
}


def get(url, retries=3, accept=None):
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, **({"Accept": accept} if accept else {})})
            with urllib.request.urlopen(req, timeout=40) as r:
                return r.read().decode("utf8", "ignore")
        except Exception as e:  # noqa
            time.sleep(1.5 * (i + 1))
            err = e
    raise err


def parse_cities(path):
    src = open(path, encoding="utf8").read()
    block = src.split("const cityData", 1)[1].split("];", 1)[0]
    return re.findall(r'\{ name: "([^"]+)", region: "[^"]+", county: "([^"]+)" \}', block)


def slugify(n):
    return re.sub(r"[^a-z0-9]+", "-", n.lower()).strip("-")


def geoid(name, county):
    base = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/1/query"
    q = urllib.parse.urlencode({"where": f"STATE='25' AND COUNTY='{COUNTY_FIPS[county]}' AND BASENAME='{name}'",
                                "outFields": "GEOID,NAME,COUNTY", "returnGeometry": "false", "f": "json"})
    feats = json.loads(get(base + "?" + q)).get("features", [])
    return [f["attributes"] for f in feats]


def table(tid, gid):
    url = f"https://data.census.gov/api/access/data/table?id=ACSDT5Y{ACS_YEAR}.{tid}&g=060XX00US{gid}"
    d = json.loads(get(url, accept="application/json"))["response"]["data"]
    head, row = d[0], d[1]
    out = {}
    for k, v in zip(head, row):
        if k.endswith("E") and re.match(r"^[A-Z]\d+_\d+E$", k) and v not in (None, ""):
            out[k] = v
    out["_name"] = dict(zip(head, row)).get("NAME")
    return out, url


def wikipedia(name):
    title = f"{name}, Massachusetts"
    url = ("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&redirects=1&format=json&titles="
           + urllib.parse.quote(title))
    d = json.loads(get(url))
    pages = d["query"]["pages"]
    p = next(iter(pages.values()))
    return {"title": p.get("title"), "url": "https://en.wikipedia.org/wiki/" + urllib.parse.quote(p.get("title", title).replace(" ", "_")),
            "text": p.get("extract", "")}


if __name__ == "__main__":
    cities = parse_cities(sys.argv[1])
    os.makedirs("facts", exist_ok=True)
    only = set(sys.argv[2:])
    for name, county in cities:
        slug = slugify(name)
        if only and slug not in only:
            continue
        path = f"facts/{slug}.json"
        if os.path.exists(path):
            continue
        rec = {"name": name, "slug": slug, "county": county, "acs_year": ACS_YEAR}
        g = geoid(name, county)
        if len(g) != 1:
            rec["error"] = f"geoid candidates: {g}"
            json.dump(rec, open(path, "w"), indent=1)
            print("!!", slug, rec["error"])
            continue
        rec["geoid"] = g[0]["GEOID"]
        rec["census_name"] = g[0]["NAME"]
        rec["acs"] = {}
        for t in TABLES:
            try:
                rec["acs"][t], u = table(t, rec["geoid"])
                rec.setdefault("acs_urls", {})[t] = u
            except Exception as e:  # noqa
                rec["acs"][t] = {"error": str(e)}
            time.sleep(0.25)
        try:
            rec["wikipedia"] = wikipedia(name)
        except Exception as e:  # noqa
            rec["wikipedia"] = {"error": str(e)}
        json.dump(rec, open(path, "w"), indent=1)
        print("ok", slug, rec["geoid"], len(rec.get("wikipedia", {}).get("text", "")), "chars wiki")
        time.sleep(0.3)
