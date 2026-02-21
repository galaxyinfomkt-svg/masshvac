import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent, Shield, Clock, Star, CheckCircle } from "lucide-react";
import { cities, getCityBySlug, getCityContent } from "@/data/cities";
import { services, cityHeroImages, getImageForCity } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  const title = `HVAC Services in ${city.name}, MA | Mass HVAC`;
  const description = `Professional HVAC services in ${city.name}, MA. Heating, cooling, mini-splits & maintenance. Licensed & insured. Call (508) 740-4113.`;
  return {
    title,
    description,
    openGraph: { title, description, url: `https://masshvac.net/cities/${city.slug}`, type: "website" },
    alternates: { canonical: `https://masshvac.net/cities/${city.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();
  const content = getCityContent(city.name);
  const heroImage = getImageForCity(city.slug, cityHeroImages);
  const cityIndex = cities.findIndex((c) => c.slug === city.slug);
  const nearby = cities.filter((_, i) => Math.abs(i - cityIndex) > 0 && Math.abs(i - cityIndex) <= 4).slice(0, 8);

  const faqItems = [
    {
      q: `How much does HVAC service cost in ${city.name}, MA?`,
      a: `HVAC service costs in ${city.name}, MA vary depending on the type of service needed. A standard tune-up typically ranges from $89–$149, while repairs can range from $150–$500+. For new installations, costs depend on system size and efficiency rating. Mass HVAC provides free, no-obligation estimates for all ${city.name} homeowners — call (508) 740-4113 for a personalized quote.`,
    },
    {
      q: `Does Mass HVAC provide 24/7 emergency HVAC service in ${city.name}?`,
      a: `Yes! Mass HVAC offers 24/7 emergency HVAC service to all ${city.name}, Massachusetts residents. Whether your furnace stops working on a cold winter night or your AC breaks down during a summer heatwave, our licensed technicians are available around the clock. Call (508) 740-4113 for immediate emergency assistance.`,
    },
    {
      q: `What HVAC services does Mass HVAC offer in ${city.name}, Massachusetts?`,
      a: `Mass HVAC provides a full range of HVAC services in ${city.name}, including heating installation and repair, air conditioning service, ductless mini-split systems, preventive maintenance plans, and indoor air quality solutions. We service all major brands and offer free estimates for ${city.name} homeowners and businesses.`,
    },
  ];

  return (
    <>
      {/* Hero — Text left + Form right */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image src={heroImage} alt={`Professional HVAC services in ${city.name}, Massachusetts`} fill className="object-cover object-center" priority quality={85} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />{city.name}, Massachusetts
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                HVAC Services in <span className="text-accent">{city.name}, MA</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                Mass HVAC provides expert heating, cooling, and indoor air quality services to homes and businesses in {city.name}, Massachusetts. Licensed, insured, and 5-star rated.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "24/7 Emergency" },
                  { icon: Star, text: "5.0 Google Rating" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                    <Icon className="w-4 h-4 text-accent" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+15087404113" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <Phone className="w-5 h-5" />(508) 740-4113
                </a>
                <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
                  Free Estimate <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right — Form (desktop only) */}
            <div className="hidden lg:block">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ko3gg97CJtkDUrqpruBq"
                className="w-full border-none rounded-lg"
                style={{ height: "420px" }}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FunilGhl"
                data-height="420"
                data-form-id="ko3gg97CJtkDUrqpruBq"
                title={`Free HVAC Estimate in ${city.name}, MA - Mass HVAC`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Services in <span className="text-accent">{city.name}, MA</span></h2>
            <p className="text-gray-500 mt-3">Click any service for details specific to {city.name}.</p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link href={`/cities/${city.slug}/${service.slug}`} className="group block p-7 bg-white border border-gray-100 card-premium rounded-xl">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">{service.shortName}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.name} in {city.name}, MA</p>
                    <span className="inline-flex items-center text-accent font-semibold text-sm">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Mass HVAC */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Why {city.name} Homeowners Choose <span className="text-accent">Mass HVAC</span></h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed & Insured", desc: "Fully licensed HVAC contractor with comprehensive insurance coverage." },
              { title: "24/7 Emergency Service", desc: "No-heat emergency? We respond fast, day or night, including holidays." },
              { title: "Free Estimates", desc: "Transparent, upfront pricing with no hidden fees or surprise charges." },
              { title: "100% Satisfaction", desc: "We stand behind every job with our satisfaction guarantee." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-gray-100 card-premium">
                  <CheckCircle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />HVAC Services in Nearby Cities
            </h2>
            <p className="text-gray-500 text-sm mb-8">We also provide professional HVAC services in these nearby Massachusetts communities.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((c) => (
                <Link key={c.slug} href={`/cities/${c.slug}`} className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                  {c.name}, MA
                </Link>
              ))}
              <Link href="/cities" className="px-5 py-2.5 bg-accent/5 text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all text-sm">
                All Cities &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-surface">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-6">Related Resources</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                HVAC Tips &amp; Blog <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                All HVAC Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
              {content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) return <h2 key={i} className="text-3xl font-bold text-primary mt-8 mb-4">{block.replace("## ", "")}</h2>;
                if (block.startsWith("### ")) return <h3 key={i} className="text-2xl font-bold text-primary mt-6 mb-3">{block.replace("### ", "")}</h3>;
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {block.split("\n").filter((l) => l.startsWith("- ")).map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary'>$1</strong>") }} />;
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions About <span className="text-accent">HVAC in {city.name}</span></h2>
            <p className="text-gray-500 mt-3">Common questions about our HVAC services in {city.name}, Massachusetts.</p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      {/* JSON-LD: LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: "Mass HVAC Inc",
        telephone: "+1-508-740-4113",
        url: "https://masshvac.net",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Milford",
          addressRegion: "MA",
          postalCode: "01757",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "State", name: "Massachusetts" },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "6",
          reviewCount: "6",
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      }) }} />

      {/* JSON-LD: Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `HVAC Services in ${city.name}, MA`,
        description: `Professional heating, cooling & HVAC services in ${city.name}, Massachusetts by Mass HVAC Inc. Licensed, insured, 5-star rated. Call (508) 740-4113.`,
        provider: {
          "@type": "HVACBusiness",
          name: "Mass HVAC Inc",
          telephone: "+1-508-740-4113",
          url: "https://masshvac.net",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "State", name: "Massachusetts" },
        },
        serviceType: "HVAC Services",
      }) }} />

      {/* JSON-LD: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://masshvac.net/cities" },
          { "@type": "ListItem", position: 3, name: `${city.name}, MA`, item: `https://masshvac.net/cities/${city.slug}` },
        ],
      }) }} />

      {/* JSON-LD: WebPage with SpeakableSpecification */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `HVAC Services in ${city.name}, MA – Mass HVAC`,
        url: `https://masshvac.net/cities/${city.slug}`,
        description: `Professional HVAC services in ${city.name}, Massachusetts. Heating, cooling, mini-splits, maintenance & indoor air quality. Licensed & insured. 24/7 emergency service.`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "p"],
        },
        isPartOf: { "@id": "https://masshvac.net/#website" },
        about: { "@id": "https://masshvac.net/#organization" },
        lastReviewed: "2026-02-20",
      }) }} />

      {/* JSON-LD: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }) }} />
    </>
  );
}
