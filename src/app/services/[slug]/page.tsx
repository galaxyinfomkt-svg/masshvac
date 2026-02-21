import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://masshvac.net/services/${service.slug}`,
      type: "website",
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.name }],
    },
    alternates: { canonical: `https://masshvac.net/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const popularCities = cities.slice(0, 20);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src={service.heroImage} alt={`${service.name} in Massachusetts — Mass HVAC`} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-accent font-semibold">{service.name}</li>
              </ol>
            </nav>

            <span className="text-5xl block mb-5">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.name}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15087404113"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
              >
                <Phone className="w-5 h-5" />
                (508) 740-4113
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Pain Points + Solutions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Why Homeowners Choose Us for <span className="text-accent">{service.shortName}</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Sound Familiar?</h3>
              </div>
              <div className="space-y-4">
                {service.painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border-l-4 border-red-300">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary">We Fix It Right.</h3>
              </div>
              <div className="space-y-4">
                {service.solutions.map((sol) => (
                  <div key={sol} className="flex items-start gap-4 p-5 bg-emerald-50/50 rounded-xl border-l-4 border-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{sol}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8">
                About Our {service.shortName} <span className="text-accent">Services</span>
              </h2>
              {service.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**"))
                  return (
                    <h3 key={i} className="text-2xl font-bold text-primary mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.replace(/^- \*?\*?/, "").replace(/\*?\*?$/, ""),
                            }}
                          />
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
          </ScrollReveal>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {service.shortName} Available In <span className="text-accent">Your City</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We proudly serve communities throughout Massachusetts. Find {service.shortName.toLowerCase()} services near you.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}/${service.slug}`}
                className="px-4 py-2 bg-surface hover:bg-accent hover:text-white text-gray-600 text-sm font-medium rounded-full border border-gray-100 transition-all duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
              >
                {city.name}, MA
              </Link>
            ))}
            <Link
              href="/cities"
              className="px-4 py-2 bg-accent/5 text-accent text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all"
            >
              All Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section — matches FAQPage schema */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {service.shortName} <span className="text-accent">FAQ</span>
            </h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <FAQAccordion
            items={[
              {
                q: `How much does ${service.name.toLowerCase()} cost in Massachusetts?`,
                a: `The cost of ${service.name.toLowerCase()} varies based on system size, complexity, and specific needs. Mass HVAC offers free estimates on all ${service.shortName.toLowerCase()} projects. Contact us at (508) 740-4113 for a personalized quote. Many of our installations qualify for Mass Save rebates.`,
              },
              {
                q: `Does Mass HVAC offer emergency ${service.shortName.toLowerCase()} service?`,
                a: `Yes, Mass HVAC provides 24/7 emergency ${service.shortName.toLowerCase()} service throughout Massachusetts. Our licensed technicians respond quickly to get your system back up and running. Call (508) 740-4113 anytime, day or night.`,
              },
              {
                q: `What areas does Mass HVAC serve for ${service.name.toLowerCase()}?`,
                a: `Mass HVAC provides ${service.name.toLowerCase()} services across Massachusetts, including Milford, Framingham, Worcester, Natick, Hopkinton, Franklin, Bellingham, and dozens of other communities. We cover all of Central and Eastern MA.`,
              },
            ]}
          />
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-12 bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-6">
              {service.shortName} <span className="text-accent">Resources</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blog" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                HVAC Tips & Blog
              </Link>
              <Link href="/projects" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                View Our Projects
              </Link>
              <Link href="/services" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                All Services
              </Link>
              <Link href="/cities" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                Service Areas
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      {/* Service JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.metaDescription,
            url: `https://masshvac.net/services/${service.slug}`,
            provider: {
              "@id": "https://masshvac.net/#organization",
            },
            areaServed: { "@type": "State", name: "Massachusetts" },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
              },
              areaServed: { "@type": "State", name: "Massachusetts" },
            },
            image: service.heroImage,
            serviceType: service.name,
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+1-508-740-4113",
                contactType: "customer service",
              },
            },
          }),
        }}
      />

      {/* Breadcrumb JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://masshvac.net/services" },
              {
                "@type": "ListItem",
                position: 3,
                name: service.name,
                item: `https://masshvac.net/services/${service.slug}`,
              },
            ],
          }),
        }}
      />

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `How much does ${service.name.toLowerCase()} cost in Massachusetts?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `The cost of ${service.name.toLowerCase()} varies based on system size, complexity, and specific needs. Mass HVAC offers free estimates on all ${service.shortName.toLowerCase()} projects. Contact us at (508) 740-4113 for a personalized quote. Many of our installations qualify for Mass Save rebates.`,
                },
              },
              {
                "@type": "Question",
                name: `Does Mass HVAC offer emergency ${service.shortName.toLowerCase()} service?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, Mass HVAC provides 24/7 emergency ${service.shortName.toLowerCase()} service throughout Massachusetts. Our licensed technicians respond quickly to get your system back up and running. Call (508) 740-4113 anytime, day or night.`,
                },
              },
              {
                "@type": "Question",
                name: `What areas does Mass HVAC serve for ${service.name.toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Mass HVAC provides ${service.name.toLowerCase()} services across Massachusetts, including Milford, Framingham, Worcester, Natick, Hopkinton, Franklin, Bellingham, and dozens of other communities. We cover all of Central and Eastern MA.`,
                },
              },
            ],
          }),
        }}
      />

      {/* WebPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: service.metaTitle,
            url: `https://masshvac.net/services/${service.slug}`,
            description: service.metaDescription,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", "p"],
            },
            isPartOf: { "@id": "https://masshvac.net/#website" },
            about: { "@id": "https://masshvac.net/#organization" },
            lastReviewed: "2026-02-20",
          }),
        }}
      />
    </>
  );
}
