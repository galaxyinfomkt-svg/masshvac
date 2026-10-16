# Mass HVAC Inc — masshvac.net

Next.js 16 (App Router, static generation) site for Mass HVAC Inc, an HVAC contractor in Milford, MA. Deployed on Vercel from `main`.

## Develop

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # must pass before every push
npm run lint
```

## Where things live

| What | File |
|---|---|
| Phone, email, hours, geo, HIC number, service-area wording | `src/data/company.ts` (single source of truth) |
| Services, prices, rebate copy | `src/data/services.ts` |
| Towns, local content, municipal electric utilities | `src/data/cities.ts` |
| Reviews (shown on the page, never in JSON-LD) | `src/data/reviews.ts` |
| Blog posts (`updated` drives dateModified + sitemap) | `src/data/blog.ts` |
| Page metadata (title/description/OG/Twitter/canonical) | `src/lib/seo.ts` → `buildMetadata()` |
| Markdown content rendering | `src/lib/markdown.tsx` |
| Quote form (site-wide `#quote`) | `src/components/QuoteSection.tsx`, `LeadForm.tsx` |

## Rules

- **Titles:** pass only the page part to `buildMetadata`; the layout appends ` | Mass HVAC Inc` once.
- **CTAs:** link to `#quote` (exists on every page) or `TEL_HREF`. Never hard-code the phone number.
- **City × service pages** stay `noindex` until the town has hand-written `localIntro` or `neighborhoods` in `cities.ts`.
- **Facts:** rebate and licensing claims must match the current Mass Save / mass.gov sources. HIC number must appear on the site once known (M.G.L. c.142A §13).
- **Analytics:** set `NEXT_PUBLIC_GTM_ID` (and optionally `NEXT_PUBLIC_GSC_VERIFICATION`) in Vercel. Lead clicks are pushed to `dataLayer` as `lead_click`.
