/**
 * Real customer reviews — rendered as HTML on the page so the
 * AggregateRating + Review JSON-LD has actual visible content backing it.
 *
 * Source: Google Business Profile (Mass HVAC Inc), extracted on 2026-06-09
 * from the reputationhub widget at
 * https://reputationhub.site/reputation/widgets/review_widget/sZJvTMNScvm4zh9WxYtH
 *
 * To add a review: paste text from the GBP into a new object below.
 * The page count, schema ratingCount/reviewCount and average rating are all
 * derived from this array — NEVER hardcode them elsewhere.
 *
 * NOTE: review text preserved verbatim, including the customers' own
 * spelling variations of the owner's name ("Gilliard" / "Giliard" /
 * "Gilliad"). The Portuguese review by Robert Rangel Silva was translated
 * to English at the owner's request so the site stays English-only for
 * Massachusetts homeowners; the original PT text is kept in a comment
 * for auditability.
 * Do NOT edit the rest of the text — these are real, attributed reviews
 * and any modification breaks both attribution and schema validity.
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
  {
    author: "Wanderson Rosa",
    rating: 5,
    dateISO: "2025-12-23",
    text: "The best hvac company around ! Giliard is a great technician",
    source: "Google",
  },
  {
    author: "kendally Duarte",
    rating: 5,
    dateISO: "2025-11-27",
    text: "They are great team! They did an amazing work!",
    source: "Google",
  },
  {
    author: "Henry Muler",
    rating: 5,
    dateISO: "2025-11-24",
    text: "I am Henry Muler , I had Gilliard and his people perform a huge project in my house, all old air ducts removed new metal ones installed , new Bosh AC with heat pump installed , tested . My wife and myself we are extremely please with the work the was done ,Everything was done clean and not much of destruction in our daily lives. Thank you Gilliard for a very professional work and being very reliable.",
    source: "Google",
  },
  {
    author: "Homero Pereira",
    rating: 5,
    dateISO: "2025-08-13",
    text: "These guys do great work at a great price. Highly recommend.",
    source: "Google",
  },
  {
    author: "Robert Rangel Silva",
    rating: 5,
    dateISO: "2025-05-03",
    // Original (PT): "Atendimento ao cliente excelente ❄️🔥"
    text: "Excellent customer service ❄️🔥",
    source: "Google",
  },
  {
    author: "LUIZ ALBERTO",
    rating: 5,
    dateISO: "2025-04-24",
    text: "bring comfort back to my home, thanks Gilliad and team",
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
