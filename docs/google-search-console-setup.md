# Google Search Console Setup — Mass HVAC

> 10-minute setup. Required for the `seo-google` skill (Search Console API)
> and for tracking real organic search performance.

## Step 1 — Add the property

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Click **Add property** (top-left)
3. Choose **URL prefix** and enter `https://masshvac.net`

## Step 2 — Verify ownership

Google will offer 5 verification methods. **The easiest with our Next.js app
is the HTML meta tag.**

1. Click **HTML tag** verification
2. Google shows a snippet like:
   ```html
   <meta name="google-site-verification" content="ABC123..._a-real-code-here" />
   ```
3. Copy the **content value** (just the string `ABC123..._a-real-code-here`)
4. Open `src/app/layout.tsx`
5. Find lines 109–114 (the commented `verification` block) and uncomment:

   ```ts
   verification: {
     google: "ABC123..._a-real-code-here", // ← paste the value here
   },
   ```

6. Commit and push:
   ```bash
   cd c:/Users/Admin/Downloads/masshvac
   git add src/app/layout.tsx
   git commit -m "Add Google Search Console verification"
   git push
   ```

7. Wait for Vercel to redeploy (~1 minute)
8. Back in Search Console, click **Verify**

## Step 3 — Submit the sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter `sitemap.xml` and click **Submit**
3. Expect Google to index ~349 URLs over the next 1–4 weeks

## Step 4 — (Optional) Bing Webmaster Tools

Same process at **[bing.com/webmasters](https://www.bing.com/webmasters/)** —
takes 5 more minutes and gets you indexed by Bing + DuckDuckGo + ChatGPT search.

## Step 5 — Track these reports weekly

| Report | What it tells you |
|---|---|
| **Performance** | Clicks, impressions, CTR, average position per query and per page |
| **Coverage / Pages** | Which URLs are indexed, which aren't, why |
| **Core Web Vitals** | LCP, INP, CLS — directly affects ranking |
| **Enhancements → Breadcrumbs** | Confirms our BreadcrumbList JSON-LD is parsed |
| **Enhancements → FAQ** | Confirms FAQPage schema is parsed |
| **Enhancements → Local Business** | Confirms HVACBusiness schema is parsed |

## After GSC is set up

The `seo-google` skill (already installed in `.agents/skills/seo-google/`)
unlocks live commands:

```
/seo google gsc sc-domain:masshvac.net
/seo google inspect https://masshvac.net/cities/framingham
/seo google pagespeed https://masshvac.net
/seo google crux https://masshvac.net
```

Requires API credentials configured at `~/.config/claude-seo/google-api.json`
— follow `seo-google/SKILL.md` §Prerequisites for that part.
