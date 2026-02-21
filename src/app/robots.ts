import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const disallowPaths = ["/api/", "/_next/", "/admin/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowPaths,
      },
      // Google bots — full access (with disallow inherited)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: disallowPaths,
      },
      // Bing
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: disallowPaths,
      },
      // AI Crawlers — allow content, block internal paths
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
        disallow: disallowPaths,
      },
      {
        userAgent: "meta-externalagent",
        allow: "/",
        disallow: disallowPaths,
      },
    ],
    sitemap: "https://masshvac.net/sitemap.xml",
  };
}
