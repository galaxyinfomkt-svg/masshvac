import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://masshvac.net";
const LAST_MOD = "2026-02-20T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: LAST_MOD, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/cities`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: LAST_MOD, changeFrequency: "daily", priority: 0.85 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/cities/${c.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const cityServicePages: MetadataRoute.Sitemap = cities.flatMap((c) =>
    services.map((s) => ({
      url: `${BASE_URL}/cities/${c.slug}/${s.slug}`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))
  );

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.75,
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
