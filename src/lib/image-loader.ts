/**
 * Image loader. Project photos are served from /public/geo with GPS EXIF written in (town
 * centroid of the town where the job was done; see scripts/geotag). The /_next/image optimizer
 * re-encodes images and drops EXIF, so these files bypass it. Every other image keeps the
 * default optimizer, which only accepts quality 75 (images.qualities default).
 */
const GEOTAGGED = new Set([
  "6998853108245e5cde03d06c",
  "6998853108245e718a03d08d",
  "6998853120c0352eb15a0dbe",
  "6998853120c03544725a0db8",
  "6998853120c0359b195a0dd9",
  "699885313a2afd32ac59c785",
  "699885313a2afd623359c780",
  "699885315ba498e66200370c",
  "699885315ba498f886003707",
  "6998853163ae752c1728d099",
  "6998853163ae753dac28d098",
  "6998853163ae75c64728d09a",
  "69988531d83aecc9666cf028",
  "69988531df9bdf143b5e9eeb",
  "69988531df9bdf801d5e9ee3",
  "69988531df9bdf89fa5e9ee1",
  "69988531df9bdffb5f5e9f09",
  "69988531e92bc11a12e97972",
  "69988531e92bc121bee97966",
  "69988531e92bc1302fe9796c",
  "69988531e92bc19c80e9796b"
]);

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const id = src.split("?")[0].split("/").pop()?.replace(/\.[a-z]+$/i, "") ?? "";
  if (GEOTAGGED.has(id)) return `/geo/${id}-${width <= 828 ? 828 : 1200}.jpg`;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}
