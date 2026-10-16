import type { Metadata } from "next";
import { BRAND, SITE_URL } from "@/data/company";

/**
 * One builder for every route's metadata.
 *
 * Why: Next.js replaces (does not deep-merge) `openGraph` and `twitter`
 * objects set by a page, so page-level openGraph dropped og:site_name,
 * og:locale and og:image, and twitter tags stayed the homepage's on all
 * 342 pages. Building the full objects here keeps every page complete.
 *
 * `title` is the page-specific part only; the brand suffix is added here
 * (" | Mass HVAC Inc", or " | Mass HVAC" when the title is long). Never put the
 * brand in `title` yourself.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  absoluteTitle = false,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** true = do not apply the " | Mass HVAC Inc" template (homepage). */
  absoluteTitle?: boolean;
  publishedTime?: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  // Google shows ~60 characters; fall back to the short brand on long titles.
  const suffix = title.length + ` | ${BRAND}`.length <= 60 ? ` | ${BRAND}` : " | Mass HVAC";
  const fullTitle = absoluteTitle ? title : `${title}${suffix}`;
  const images = image
    ? [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }]
    : [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${BRAND} — Heating & Cooling in MetroWest, MA` }];

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type,
      url,
      siteName: BRAND,
      locale: "en_US",
      title: fullTitle,
      description,
      images,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}
