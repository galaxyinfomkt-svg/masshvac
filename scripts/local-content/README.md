# Local content pipeline

Builds sourced, unique local content for the city pages in `src/data/cities.ts`.
Run everything from a scratch folder, not from the repo root:

```bash
mkdir .local-content && cd .local-content          # add .local-content/ to .gitignore
cp ../scripts/local-content/{ng_towns.json,BRIEF.md,validate.py,factsheet.py,collect.py,measure.py} .
mkdir -p content extras

# 1. Facts for every city (keyless public sources, about 30 s per town)
python collect.py ../src/data/cities.ts              # -> facts/<slug>.json
#    Census TIGERweb (official town GEOID), data.census.gov (ACS 5-year tables
#    B25040 heating fuel, B25034 year built, B25003 tenure, B25024 units in structure,
#    B25035 median year built, B25077 median value, B25001/B25002/B01003) and the
#    Wikipedia plain text of each town.

# 2. Fact sheets with ranks among all the towns and the median town
python factsheet.py                                  # -> sheets/<slug>.md, metrics.json

# 3. Write content/<slug>.json following BRIEF.md (a person or a writing agent),
#    then check it. The validator rejects numbers that are not in the fact sheet,
#    unverified company claims, hype words, wrong lengths and bad table formatting.
python validate.py content/<slug>.json sheets/<slug>.md

# 4. Copy it into the site and register it
cp content/<slug>.json ../src/data/local/<slug>.json   # then add it to src/data/local/index.ts

# 5. Build, serve and measure uniqueness against EVERY other page
cd .. && npm run build && npx next start -p 3115 &
python .local-content/measure.py http://localhost:3115
```

`measure.py` reports, for every city and city x service page, the share of 8-word runs that appear on no other page:
- **own**: only the text the page owns (marked `data-own`: quick answer, body, FAQ)
- **main**: everything inside `<main>`, including the modules repeated on every page

A city is added to `src/data/local/index.ts` only when its `main` figure is at least 70% on all six pages.

## Things that bit us

- `collect.py` uses the ACS 2022 5-year vintage. The Census API (`api.census.gov`) now needs a key, so the script reads the same tables from `data.census.gov/api/access/data/table`.
- The electric utility is named only when it is confirmed: `ng_towns.json` is built from National Grid's own territory list (`national-grid-territory.txt`), municipal utilities come from the research already in `src/data/cities.ts`. For every other town the writer is told not to name a utility.
- Do not mix sources for the same figure. The Milford Comprehensive Plan (2024) says 10,472 housing units and "close to three quarters built before 1980"; the ACS 2022 tables say 11,950 units and 68.9%. The site uses the ACS tables everywhere so all towns are comparable.
- `renderMarkdown` ends a table at a blank line: keep the whole table in ONE array element, rows joined with `\n`.
- Rebate amounts are for equipment installed in 2026 (applications due 2027-02-28). Re-check every January.
