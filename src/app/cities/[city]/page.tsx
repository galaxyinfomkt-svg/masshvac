import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug, getCityContent } from "@/data/cities";
import { services } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  return {
    title: `HVAC Services in ${city.name}, MA | Heating & Cooling – Mass HVAC`,
    description: `Professional HVAC services in ${city.name}, Massachusetts. Heating, cooling, mini-splits, maintenance & more. 24/7 emergency service. Call Mass HVAC!`,
    openGraph: {
      title: `HVAC Services in ${city.name}, MA – Mass HVAC`,
      description: `Expert heating & cooling services in ${city.name}, MA. Fast response, fair pricing, satisfaction guaranteed.`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const content = getCityContent(city.name);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
              📍 {city.name}, Massachusetts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              HVAC Services in{" "}
              <span className="text-accent-light">{city.name}, MA</span>
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Mass HVAC provides professional heating, cooling, and indoor air quality services
              to homes and businesses in {city.name}, Massachusetts. Fast response, fair pricing,
              and guaranteed satisfaction.
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
                Free Estimate in {city.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">
            Our Services in {city.name}, MA
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click any service below to see detailed information specific to {city.name}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/cities/${city.slug}/${service.slug}`}
                className="group p-6 bg-surface rounded-2xl hover:bg-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span className="text-3xl block mb-3">{service.icon}</span>
                <h3 className="text-lg font-bold text-primary-dark group-hover:text-white transition-colors mb-2">
                  {service.shortName}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors mb-4">
                  {service.name} in {city.name}, MA
                </p>
                <span className="inline-flex items-center text-accent group-hover:text-accent-light text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City content */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-strong:text-primary-dark">
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
            name: `HVAC Services in ${city.name}, MA`,
            description: `Professional heating, cooling & HVAC services in ${city.name}, Massachusetts by Mass HVAC Inc.`,
            provider: {
              "@type": "HVACBusiness",
              name: "Mass HVAC Inc",
              telephone: "+1-508-386-9104",
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
