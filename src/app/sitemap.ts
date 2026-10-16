import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { cities, cityHasLocalContent } from "@/data/cities";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/data/company";

/**
 * <lastmod> must reflect real content changes (a build timestamp on every URL
 * teaches Google to ignore it). Bump CONTENT_UPDATED when page copy changes;
 * blog posts use their own `updated`/`date`.
 */
const CONTENT_UPDATED = new Date("2026-10-16");
const LEGAL_UPDATED = new Date("2026-05-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, lastModified = CONTENT_UPDATED) => ({ url: `${SITE_URL}${path}`, lastModified });

  return [
    page(""),
    page("/services"),
    page("/cities"),
    page("/projects"),
    page("/reviews"),
    page("/blog"),
    page("/privacy", LEGAL_UPDATED),
    page("/terms", LEGAL_UPDATED),
    page("/cookies", LEGAL_UPDATED),
    page("/sms-terms", LEGAL_UPDATED),
    ...services.map((s) => page(`/services/${s.slug}`)),
    ...cities.map((c) => page(`/cities/${c.slug}`)),
    // Deep city×service pages are noindex until the city has hand-written
    // local content — keep noindexed URLs out of the sitemap.
    ...cities.filter(cityHasLocalContent).flatMap((c) => services.map((s) => page(`/cities/${c.slug}/${s.slug}`))),
    ...projects.map((p) => page(`/projects/${p.slug}`)),
    ...blogPosts.map((p) => page(`/blog/${p.slug}`, new Date(p.updated ?? p.date))),
  ];
}
