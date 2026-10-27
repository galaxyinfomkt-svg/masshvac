/**
 * Hand-written, sourced local content for one city.
 *
 * Paragraph arrays are joined with a blank line and rendered with renderMarkdown
 * (## headings, - lists, | tables |, **bold**, [links](url)). A table must be ONE
 * array element whose rows are joined with "\n", because a blank line ends a table.
 *
 * Rules (see docs/local-content-sources.md): every number must come from the ACS
 * facts in facts/<slug>.json or from a source listed in `sources`; no invented
 * street names, businesses or claims about the company.
 */
export interface LocalFaq {
  q: string;
  a: string;
}

export interface LocalServiceContent {
  /** One or two sentences shown under the page H1. */
  quickAnswer: string;
  body: string[];
  faq: LocalFaq[];
}

export interface LocalCityContent {
  slug: string;
  /** ACS 5-year vintage the figures come from. */
  acsYear: number;
  quickAnswer: string;
  body: string[];
  faq: LocalFaq[];
  /** Keyed by service slug (see src/data/services.ts). */
  services: Record<string, LocalServiceContent>;
  sources: { label: string; url: string }[];
}
