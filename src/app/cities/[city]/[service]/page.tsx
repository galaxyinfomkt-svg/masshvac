import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getCityServiceContent } from "@/data/cities";
import { services, getServiceBySlug } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} in ${city.name}, MA – Mass HVAC`;
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, Massachusetts. Fast service, fair pricing, satisfaction guaranteed. Call Mass HVAC at (508) 386-9104.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const content = getCityServiceContent(city.name, service.name, service.slug);

  // Get nearby cities (just neighbors in the array)
  const cityIndex = cities.findIndex((c) => c.slug === city.slug);
  const nearby = cities
    .filter((_, i) => Math.abs(i - cityIndex) > 0 && Math.abs(i - cityIndex) <= 5)
    .slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={`/cities/${city.slug}`}
                className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full hover:bg-white/20 transition-colors"
              >
                {city.name}, MA
              </Link>
              <span className="text-white/40">/</span>
              <Link
                href={`/services/${service.slug}`}
                className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full hover:bg-white/20 transition-colors"
              >
                {service.shortName}
              </Link>
            </div>

            <span className="text-5xl block mb-4">{service.icon}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              {service.name} in{" "}
              <span className="text-accent-light">{city.name}, MA</span>
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Looking for professional {service.name.toLowerCase()} in {city.name}, Massachusetts?
              Mass HVAC is the trusted local choice. Fast response, fair pricing, and 100% satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15083869104"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-full transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call (508) 386-9104
              </a>
              <Link
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-primary-dark text-white font-bold text-lg rounded-full transition-all hover:scale-105"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            {content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-3xl font-bold text-primary-dark mt-8 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-2xl font-bold text-primary-dark mt-6 mb-3">
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark'>$1</strong>") }} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary-dark text-center mb-8">
            Other HVAC Services in {city.name}, MA
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/cities/${city.slug}/${s.slug}`}
                  className="px-5 py-2.5 bg-white text-primary font-medium rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all"
                >
                  {s.icon} {s.shortName} in {city.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Same service in nearby cities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary-dark text-center mb-8">
            {service.shortName} in Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                href={`/cities/${c.slug}/${service.slug}`}
                className="px-5 py-2.5 bg-surface text-gray-700 font-medium rounded-full hover:bg-primary hover:text-white transition-all"
              >
                {c.name}, MA
              </Link>
            ))}
            <Link
              href="/cities"
              className="px-5 py-2.5 bg-accent/10 text-accent font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
            >
              View All Cities →
            </Link>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.name} in ${city.name}, MA`,
            description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Massachusetts by Mass HVAC Inc.`,
            provider: {
              "@type": "HVACBusiness",
              name: "Mass HVAC Inc",
              telephone: "+1-508-386-9104",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Milford",
                addressRegion: "MA",
                addressCountry: "US",
              },
            },
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: { "@type": "State", name: "Massachusetts" },
            },
          }),
        }}
      />
    </>
  );
}
