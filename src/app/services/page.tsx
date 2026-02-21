import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export const metadata: Metadata = {
  title: "HVAC Services in Massachusetts | Mass HVAC",
  description:
    "Complete HVAC services across MA — heating, AC, mini-splits, maintenance & air quality. Licensed & insured. Call (508) 740-4113 for a free estimate.",
  alternates: {
    canonical: "https://masshvac.net/services",
  },
  openGraph: {
    title: "HVAC Services in Massachusetts | Mass HVAC",
    description:
      "Expert heating, cooling, ductless mini-split, maintenance & indoor air quality services across MA. Licensed, insured & available 24/7. Free estimates.",
    url: "https://masshvac.net/services",
    type: "website",
    images: [
      {
        url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg",
        width: 1200,
        height: 630,
        alt: "Mass HVAC Professional HVAC Services in Massachusetts",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://masshvac.net/services" },
            ],
          }),
        }}
      />

      {/* Service List JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "HVAC Services by Mass HVAC",
            description:
              "Complete HVAC services in Massachusetts including heating, cooling, mini-splits, maintenance & indoor air quality.",
            numberOfItems: services.length,
            itemListElement: services.map((service, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: service.name,
              url: `https://masshvac.net/services/${service.slug}`,
            })),
          }),
        }}
      />

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What HVAC services does Mass HVAC offer in Massachusetts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mass HVAC provides comprehensive HVAC services including heating installation & repair, air conditioning installation & repair, ductless mini-split systems, preventive maintenance plans, and indoor air quality solutions. We serve homeowners and businesses across Massachusetts.",
                },
              },
              {
                "@type": "Question",
                name: "Does Mass HVAC offer 24/7 emergency HVAC service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Mass HVAC offers 24/7 emergency heating and cooling repair throughout Massachusetts. Whether your furnace breaks down at 2 AM or your AC stops working on the hottest day of the year, our licensed technicians are ready to respond. Call (508) 740-4113 anytime.",
                },
              },
              {
                "@type": "Question",
                name: "How much does HVAC service cost in Massachusetts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HVAC service costs vary depending on the type of work needed. Mass HVAC offers free estimates on all new installations and competitive pricing on repairs and maintenance. Many of our high-efficiency installations qualify for Mass Save rebates, helping offset costs. Contact us for a personalized quote.",
                },
              },
            ],
          }),
        }}
      />

      {/* WebPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "HVAC Services in Massachusetts | Mass HVAC",
            url: "https://masshvac.net/services",
            description: "Complete HVAC services across Massachusetts — heating, cooling, mini-splits, maintenance & indoor air quality.",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2"],
            },
            isPartOf: { "@id": "https://masshvac.net/#website" },
            about: { "@id": "https://masshvac.net/#organization" },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg"
          alt="Professional HVAC services in Massachusetts by Mass HVAC"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-semibold">Services</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our HVAC <span className="text-accent">Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From emergency repairs to full system installations — expert heating, cooling, and indoor air quality
            solutions for homes and businesses across Massachusetts.
          </p>
          <div className="accent-divider mt-8" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive HVAC Solutions for <span className="text-accent">Massachusetts</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Licensed, insured, and trusted by homeowners across MA. Every service backed by our satisfaction guarantee.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden card-premium ${isEven ? "" : "md:direction-rtl"}`}
                  >
                    <div className={`relative h-72 md:h-auto overflow-hidden ${isEven ? "" : "md:order-2"}`}>
                      <Image
                        src={service.heroImage}
                        alt={`${service.name} services in Massachusetts by Mass HVAC`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-5 left-5 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(200,16,46,0.3)]">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? "" : "md:order-1"}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                      <div className="mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                          Common Issues We Solve:
                        </p>
                        <ul className="space-y-2">
                          {service.painPoints.slice(0, 3).map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="inline-flex items-center text-accent font-bold text-sm">
                        View Service Details{" "}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-accent">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Emergency HVAC Service?</h2>
              <p className="text-white/80">No heat at 2 AM? AC died on the hottest day? We&apos;re available 24/7.</p>
            </div>
            <a
              href="tel:+15087404113"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105 shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
            >
              <Phone className="w-5 h-5" />
              (508) 740-4113
            </a>
          </div>
        </div>
      </section>

      <MapSection />
      <ContactForm />
    </>
  );
}
