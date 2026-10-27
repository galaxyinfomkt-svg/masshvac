import type { LocalCityContent } from "./types";
import milford from "./milford.json";

/**
 * Cities that have sourced, unique local content. A city listed here is indexable
 * (see cityHasLocalContent in ../cities.ts) and its pages render this content
 * instead of the generic templates. Add a city only after its facts were checked.
 */
const localContent: Record<string, LocalCityContent> = {
  milford: milford as LocalCityContent,
};

export function getLocalContent(slug: string): LocalCityContent | undefined {
  return localContent[slug];
}
