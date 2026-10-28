# Photo geotagging

`geotag.py` downloads each site photo, writes GPS (and a description) into its EXIF and saves 828 px and 1200 px versions to `public/geo/`. `src/lib/image-loader.ts` serves those files for the photos listed in it, because `/_next/image` re-encodes images and drops EXIF.

- Run from a scratch folder that has `facts/*.json` (from `scripts/local-content/collect.py`), `geo/orig/` (the downloaded originals) and `geo/urls.json`.
- Coordinates are the Census internal point of the town where the project was done (TIGERweb), not the address of the job. All 21 photos are project photos with a town in `src/data/projects.ts`.
- Google does not use EXIF location as a ranking signal. Treat this as metadata hygiene, not as SEO.
- To add a photo: add it to `geo/urls.json`, rerun, and add its id to the set in `image-loader.ts`.
