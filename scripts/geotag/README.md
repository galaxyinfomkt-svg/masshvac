# Photo geotagging

`geotag.py` downloads each site photo, writes GPS (and a description) into its EXIF and saves 828 px and 1200 px versions to `public/geo/`. `src/lib/image-loader.ts` serves those files for the photos listed in it, because `/_next/image` re-encodes images and drops EXIF.

- Run from a scratch folder that has `facts/*.json` (from `scripts/local-content/collect.py`), `geo/orig/` (the downloaded originals) and `geo/urls.json`.
- Coordinates are the Census internal point of the town where the project was done (TIGERweb), not the address of the job. All 21 photos are project photos with a town in `src/data/projects.ts`.
- Google does not use EXIF location as a ranking signal. Treat this as metadata hygiene, not as SEO.
- To add a photo: add it to `geo/urls.json`, rerun, and add its id to the set in `image-loader.ts`.

## Drive photos (geotag_drive.py)
The Mass HVAC Drive folder (GALLERY) has job photos with no GPS and no location in the file or the name. geotag_drive.py writes the Milford base coordinates and a description that says so ("location: Mass HVAC base, Milford, MA"). If the town of a job is known, change the coordinates for that photo. The older 21 photos use the town of the project they belong to in src/data/projects.ts.
src/data/photos.ts lists the gallery photos and their alt text.
