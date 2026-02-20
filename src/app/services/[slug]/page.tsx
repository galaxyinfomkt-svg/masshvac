import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.name }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const popularCities = cities.slice(0, 20);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-5xl mb-4">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {service.name}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15083869104"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
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
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points + Solutions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pain points */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
                Common Problems
              </span>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                Sound Familiar?
              </h2>
              <div className="space-y-4">
                {service.painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 p-4 bg-red-50/50 rounded-xl">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-sm font-semibold rounded-full mb-4">
                Our Solutions
              </span>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                We Fix It Right.
              </h2>
              <div className="space-y-4">
                {service.solutions.map((sol) => (
                  <div key={sol} className="flex items-start gap-4 p-4 bg-green-50/50 rounded-xl">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{sol}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-accent">
            {service.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3 key={i} className="text-2xl font-bold text-primary-dark mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {item.replace(/^- \*?\*?/, "").replace(/\*?\*?$/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities we serve for this service */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-primary-dark text-center mb-4">
            {service.shortName} Service Available In
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide {service.name.toLowerCase()} services across Massachusetts. Click any city to see local details.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}/${service.slug}`}
                className="px-4 py-2 bg-surface hover:bg-primary hover:text-white text-gray-700 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-md"
              >
                {city.name}, MA
              </Link>
            ))}
            <Link
              href="/cities"
              className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full hover:bg-accent hover:text-white transition-all"
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
            name: service.name,
            description: service.description,
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
              "@type": "State",
              name: "Massachusetts",
            },
            image: service.heroImage,
          }),
        }}
      />
    </>
  );
}
