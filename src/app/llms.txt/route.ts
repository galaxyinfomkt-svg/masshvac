import { services } from "@/data/services";
import { cities } from "@/data/cities";
import {
  SITE_URL,
  BRAND,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  HOURS_DISPLAY,
  EMERGENCY_NOTE,
  SERVICE_AREA_LABEL,
} from "@/data/company";

export const dynamic = "force-static";

/**
 * Plain-text business summary for LLM crawlers (llmstxt.org format).
 * Built only from src/data so it never drifts from the site; if a fact is
 * not in the data files it does not belong here.
 */
export function GET() {
  const lines = [
    `# ${BRAND}`,
    "",
    `> HVAC contractor based in ${ADDRESS.locality}, ${ADDRESS.region}, serving ${cities.length} towns across ${SERVICE_AREA_LABEL}. Heating, air conditioning, heat pumps and ductless mini-splits, maintenance and indoor air quality. Free written estimates.`,
    "",
    "## Contact",
    "",
    `- Phone: ${PHONE_DISPLAY}`,
    `- Email: ${EMAIL}`,
    `- Hours: ${HOURS_DISPLAY} (${EMERGENCY_NOTE})`,
    `- Website: ${SITE_URL}`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.description}`),
    "",
    "## Key pages",
    "",
    `- [Service areas](${SITE_URL}/cities): the ${cities.length} towns served`,
    `- [Projects](${SITE_URL}/projects)`,
    `- [Customer reviews](${SITE_URL}/reviews)`,
    `- [Blog](${SITE_URL}/blog)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
