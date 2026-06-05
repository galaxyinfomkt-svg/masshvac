/**
 * Real customer reviews — rendered as HTML on the page so the
 * AggregateRating + Review JSON-LD has actual visible content backing it.
 *
 * Source: Google Business Profile (Mass HVAC Inc).
 * To add a review: paste text from the GBP into a new object below.
 * The page count, schema ratingCount/reviewCount and average rating are all
 * derived from this array — NEVER hardcode them elsewhere.
 */

export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** ISO 8601 date — e.g. "2025-08-14" */
  dateISO: string;
  text: string;
  source: "Google";
}

export const reviews: Review[] = [
  // TODO(Luiz): substituir os 6 itens abaixo pelos textos reais do Google Business Profile.
  // Mantenha exatamente 6 (ou mais — o schema/UI se ajusta) e use datas ISO 8601.
  {
    author: "TODO(Luiz: nome do cliente)",
    rating: 5,
    dateISO: "2025-01-01", // TODO(Luiz): data real da review
    text: "TODO(Luiz: colar texto real da review do Google).",
    source: "Google",
  },
  {
    author: "TODO(Luiz: nome do cliente)",
    rating: 5,
    dateISO: "2025-01-01", // TODO(Luiz)
    text: "TODO(Luiz: colar texto real da review do Google).",
    source: "Google",
  },
  {
    author: "TODO(Luiz: nome do cliente)",
    rating: 5,
    dateISO: "2025-01-01", // TODO(Luiz)
    text: "TODO(Luiz: colar texto real da review do Google).",
    source: "Google",
  },
  {
    author: "TODO(Luiz: nome do cliente)",
    rating: 5,
    dateISO: "2025-01-01", // TODO(Luiz)
    text: "TODO(Luiz: colar texto real da review do Google).",
    source: "Google",
  },
  {
    author: "TODO(Luiz: nome do cliente)",
    rating: 5,
    dateISO: "2025-01-01", // TODO(Luiz)
    text: "TODO(Luiz: colar texto real da review do Google).",
    source: "Google",
  },
  {
    author: "TODO(Luiz: nome do cliente)",
    rating: 5,
    dateISO: "2025-01-01", // TODO(Luiz)
    text: "TODO(Luiz: colar texto real da review do Google).",
    source: "Google",
  },
];

export const reviewCount = reviews.length;

export const averageRating = Number(
  (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
);

/** Schema.org Review[] for the Organization JSON-LD. */
export const reviewSchema = reviews.map((r) => ({
  "@type": "Review",
  author: { "@type": "Person", name: r.author },
  datePublished: r.dateISO,
  reviewRating: {
    "@type": "Rating",
    ratingValue: r.rating,
    bestRating: 5,
    worstRating: 1,
  },
  reviewBody: r.text,
  publisher: { "@type": "Organization", name: r.source },
}));
