import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { cities, cityHasLocalContent } from "@/data/cities";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://masshvac.net";

// Per seo-sitemap SKILL.md:
//  • <lastmod> must reflect actual modification (constant date is a low-severity quality issue)
//  • <priority> and <changefreq> are ignored by Google — omitted intentionally
//  • Sitemap also referenced from robots.ts for discovery
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now },
    { url: `${BASE_URL}/services`, lastModified: now },
    { url: `${BASE_URL}/cities`, lastModified: now },
    { url: `${BASE_URL}/projects`, lastModified: now },
    { url: `${BASE_URL}/reviews`, lastModified: now },
    { url: `${BASE_URL}/blog`, lastModified: now },
    { url: `${BASE_URL}/privacy`, lastModified: now },
    { url: `${BASE_URL}/terms`, lastModified: now },
    { url: `${BASE_URL}/cookies`, lastModified: now },
    { url: `${BASE_URL}/sms-terms`, lastModified: now },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/cities/${c.slug}`,
    lastModified: now,
  }));

  // Only include deep pages whose city has hand-written local content.
  // Pages without it are noindex'd in generateMetadata — emitting them in
  // the sitemap would tell Google to crawl URLs we explicitly excluded
  // from the index, wasting crawl budget and causing GSC warnings.
  const cityServicePages: MetadataRoute.Sitemap = cities
    .filter(cityHasLocalContent)
    .flatMap((c) =>
      services.map((s) => ({
        url: `${BASE_URL}/cities/${c.slug}/${s.slug}`,
        lastModified: now,
      }))
    );

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...cityServicePages,
    ...projectPages,
    ...blogPages,
  ];
}
