import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent, Shield, Clock, Star, CheckCircle } from "lucide-react";
import { cities, getCityBySlug, getCityContent } from "@/data/cities";
import { services, cityHeroImages, getImageForCity } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { PHONE_DISPLAY, TEL_HREF, SITE_URL } from "@/data/company";
import { averageRating } from "@/data/reviews";
import { buildMetadata } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildMetadata({
    title: `HVAC Services in ${city.name}, MA`,
    description: `Heating, AC, heat pump and mini-split service in ${city.name}, MA from Mass HVAC, based in Milford. Free written estimates. Call (508) 786-8755.`,
    path: `/cities/${city.slug}`,
  });
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
    ...(city.localFaq ?? []).map(({ q, a }) => ({ q, a })),
    {
      q: `How much does HVAC service cost in ${city.name}, MA?`,
      a: `A seasonal tune-up usually runs $89–$149 and most common repairs $150–$500. New equipment depends on system size and type, so we give ${city.name} homeowners a free written estimate before any work starts. Call ${PHONE_DISPLAY}.`,
    },
    {
      q: `Does Mass HVAC take emergency calls in ${city.name}?`,
      a: `Yes. We take emergency calls 24/7 for homes in ${city.name}. If your furnace quits on a winter night or your AC fails in a heatwave, call ${PHONE_DISPLAY} and we will tell you when a technician can get there.`,
    },
    {
      q: `What HVAC services does Mass HVAC offer in ${city.name}?`,
      a: `Heating installation and repair, air conditioning, heat pumps and ductless mini-splits, seasonal maintenance, and indoor air quality. We work on major brands and give free estimates to ${city.name} homeowners and businesses.`,
    },
  ];

  return (
    <>
      {/* Hero — Text left + Form right */}
      <section className="relative overflow-hidden">
        <Image src={heroImage} alt={`HVAC service in ${city.name}, MA`} fill sizes="100vw" className="object-cover object-center" priority fetchPriority="high" quality={75} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 lg:pt-40 lg:pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" aria-hidden="true" />{city.name}, Massachusetts
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                HVAC Services in <span className="text-[#FF5A5A]">{city.name}, MA</span>
              </h1>

              {/* TL;DR — direct-answer block optimized for AI citation (per optimize-for-ai SKILL.md §1 Extractability) */}
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-accent rounded-r-lg p-5 mb-8 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white mb-2">
                  Quick Answer
                </p>
                <p className="text-white text-base leading-relaxed">
                  <strong>Mass HVAC Inc</strong>, based in Milford, serves <strong>{city.name}, MA</strong> with heating and AC repair and installation, heat pumps, ductless mini-splits and 24/7 emergency calls. Licensed and insured, {averageRating.toFixed(1)} on Google. Free written estimates: call <a href={TEL_HREF} className="underline font-bold">{PHONE_DISPLAY}</a>.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock, text: "24/7 Emergency" },
                  { icon: Star, text: `${averageRating.toFixed(1)} Google Rating` },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-white/90 text-sm">
                    <Icon className="w-4 h-4 text-[#FF5A5A]" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={TEL_HREF} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <Phone className="w-5 h-5" aria-hidden="true" />{PHONE_DISPLAY}
                </a>
                <a href="#quote" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
                  Free Estimate <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right — Form (desktop only) */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <LeadForm instance="city-hero" height={460} delayMs={2000} title={`Free HVAC Estimate in ${city.name}, MA`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Services in <span className="text-accent">{city.name}, MA</span></h2>
            <p className="text-gray-600 mt-3">Click any service for details specific to {city.name}.</p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:[&>*]:col-span-2 lg:[&>*:nth-child(4)]:col-start-2">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link href={`/cities/${city.slug}/${service.slug}`} className="group block p-7 bg-white border border-gray-100 card-premium rounded-xl">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">{service.shortName}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.name} in {city.name}, MA</p>
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

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
              <div className="md-content">{renderMarkdown(content)}</div>
            </div>
          </ScrollReveal>
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
              { title: "Written Estimates", desc: "You get the price in writing before any work starts." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-6 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-gray-100 card-premium">
                  <CheckCircle className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
            <p className="text-gray-600 text-sm mb-8">We also serve these nearby MetroWest towns.</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions About <span className="text-accent">HVAC in {city.name}</span></h2>
            <p className="text-gray-600 mt-3">Common questions about our HVAC services in {city.name}, Massachusetts.</p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />

      {/* JSON-LD: Service — aggregateRating intentionally OMITTED here.
          It lives only on the Organization schema (layout.tsx), where the
          reviews are actually rendered. Provider references the org by @id
          so Google can resolve ratings without duplicating them per page. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `HVAC Services in ${city.name}, MA`,
        description: `Heating, cooling and heat pump service in ${city.name}, MA by Mass HVAC Inc of Milford.`,
        provider: { "@id": `${SITE_URL}/#organization` },
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
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/cities` },
          { "@type": "ListItem", position: 3, name: `${city.name}, MA`, item: `${SITE_URL}/cities/${city.slug}` },
        ],
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
