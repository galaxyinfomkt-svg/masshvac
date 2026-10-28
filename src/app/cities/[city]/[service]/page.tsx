import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, MapPin, Shield, Clock, Star, CheckCircle, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { cities, getCityBySlug, getCityServiceContent, cityHasLocalContent } from "@/data/cities";
import { services, getServiceBySlug, serviceImagePool, cityHeroImages, getImageForCity, formatRange } from "@/data/services";
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
import { getLocalContent } from "@/data/local";
import { CityQuoteMobile, CityAbout, CityProcess, CityProjects, CityEmergency } from "@/components/CitySections";

/** Search-style labels per service ("furnace repair natick" beats "Heating in Natick"). */
const SEARCH_LABEL: Record<string, string> = {
  "heating-installation-repair": "Furnace & Heating Repair",
  "air-conditioning-installation-repair": "AC Repair & Installation",
  "heat-pumps-ductless-mini-splits": "Heat Pumps & Mini-Splits",
  "hvac-maintenance-tune-ups": "HVAC Tune-Ups",
  "indoor-air-quality": "Indoor Air Quality",
};

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) for (const service of services) params.push({ city: city.slug, service: service.slug });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city: cs, service: ss } = await params;
  const city = getCityBySlug(cs), service = getServiceBySlug(ss);
  if (!city || !service) return {};
  const label = SEARCH_LABEL[service.slug] ?? service.shortName;
  // Defensive noindex for thin/template deep pages: indexable only once the
  // city has hand-written local content (localIntro or neighborhoods).
  const isIndexable = cityHasLocalContent(city);
  return buildMetadata({
    title: `${label} in ${city.name}, MA`,
    description: `${label} in ${city.name}, MA from Mass HVAC, based in Milford. Written estimates, 24/7 emergency calls. Call ${PHONE_DISPLAY}.`,
    path: `/cities/${city.slug}/${service.slug}`,
    image: service.heroImage,
    imageAlt: `${label} in ${city.name}, MA`,
    noindex: !isIndexable,
  });
}

export default async function CityServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city: cs, service: ss } = await params;
  const city = getCityBySlug(cs), service = getServiceBySlug(ss);
  if (!city || !service) notFound();
  // Sourced, unique local content (src/data/local) replaces the generic template when it exists.
  const local = getLocalContent(city.slug);
  const localService = local?.services[service.slug];
  const content = localService
    ? localService.body.join("\n\n")
    : getCityServiceContent(city.name, service.name, service.slug);
  const cityIndex = cities.findIndex((c) => c.slug === city.slug);
  const nearby = cities.filter((_, i) => Math.abs(i - cityIndex) > 0 && Math.abs(i - cityIndex) <= 5).slice(0, 5);
  const serviceIndex = services.findIndex((s) => s.slug === service.slug);
  const ServiceIcon = serviceIcons[serviceIndex] || Wrench;
  const serviceImages = serviceImagePool[service.slug] || cityHeroImages;
  const heroImage = getImageForCity(`${city.slug}-${service.slug}`, serviceImages);

  // Build the FAQ once. Visible accordion AND FAQPage JSON-LD consume the
  // SAME array — any drift between visible content and schema is impossible.
  // Price ranges come from services.ts; if a service has no range yet
  // (TODO Luiz), the answer falls back to "free quote on request".
  const tuneUp = service.tuneUpRange ? formatRange(service.tuneUpRange) : "a free written quote";
  const repair = service.repairRange ? formatRange(service.repairRange) : "free diagnostic with written quote";
  const install = service.installRange ? formatRange(service.installRange) : "a free in-home estimate";

  const faqItems: { q: string; a: string }[] = [
    ...(city.localFaq ?? []).filter((f) => f.services?.includes(service.slug)).map(({ q, a }) => ({ q, a })),
    {
      q: `How much does ${service.name.toLowerCase()} cost in ${city.name}, MA?`,
      a: `${city.name} homeowners typically pay ${tuneUp} for ${service.shortName.toLowerCase()} tune-ups, ${repair} for common repairs, and ${install} for a complete new installation. Final pricing depends on system size, brand, and site conditions; Mass HVAC gives you a written estimate before any work starts. Call ${PHONE_DISPLAY} for a free quote.`,
    },
    {
      q: `Does Mass HVAC offer 24/7 emergency ${service.shortName.toLowerCase()} service in ${city.name}?`,
      a: `Yes. We take emergency ${service.shortName.toLowerCase()} calls 24/7 for homes in ${city.name} and nearby towns. Our techs carry common parts on the truck, so many repairs are done on the first visit. Call ${PHONE_DISPLAY}.`,
    },
    ...(service.extraFaq ? [service.extraFaq] : []),
    {
      q: `Is Mass HVAC licensed and insured for ${service.shortName.toLowerCase()} work in ${city.name}?`,
      a: `Yes. Mass HVAC is licensed and insured, and we pull the required ${city.name} permits for installation work.`,
    },
  ];

  const finalFaq = localService ? localService.faq : faqItems;

  return (
    <>
      {/* Hero — Text left + Form right */}
      <section className="relative overflow-hidden">
        <Image src={heroImage} alt={`${service.name} in ${city.name}, Massachusetts - Mass HVAC`} fill sizes="100vw" className="object-cover object-center" priority fetchPriority="high" quality={75} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 lg:pt-40 lg:pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              {/* Breadcrumb pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Link href="/cities" className="px-3 py-2 bg-white/15 text-white text-sm rounded-full hover:bg-white/25 transition-colors">Service Areas</Link>
                <span className="text-white/60" aria-hidden="true">/</span>
                <Link href={`/cities/${city.slug}`} className="px-3 py-2 bg-white/15 text-white text-sm rounded-full hover:bg-white/25 transition-colors">{city.name}, MA</Link>
                <span className="text-white/60" aria-hidden="true">/</span>
                <span className="px-3 py-2 bg-white text-primary text-sm rounded-full font-semibold" aria-current="page">{service.shortName}</span>
              </div>

              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <ServiceIcon className="w-6 h-6 text-white" />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {SEARCH_LABEL[service.slug] ?? service.name} in <span className="text-[#FF5A5A]">{city.name}, MA</span>
              </h1>
              {localService ? (
                <p data-own className="text-white/80 text-lg leading-relaxed mb-6 max-w-xl">{localService.quickAnswer}</p>
              ) : (
                <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-xl">
                  Need {service.name.toLowerCase()} in {city.name}? Mass HVAC is based in Milford, close by. Licensed, insured, {averageRating.toFixed(1)} on Google, and you get a written estimate before any work starts.
                </p>
              )}

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-6">
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
                <LeadForm instance="city-service-hero" height={640} delayMs={2000} title={`Free ${service.shortName} Estimate in ${city.name}, MA`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityQuoteMobile cityName={city.name} />

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
              <div className="md-content" data-own>{renderMarkdown(content)}</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CityAbout cityName={city.name} />
      <CityProcess />
      <CityProjects cityName={city.name} cityIndex={cityIndex} />
      <CityEmergency cityName={city.name} />
      <ReviewsWidget compact={Boolean(localService)} />

      {!localService && (
        <>
      {/* Why Choose Mass HVAC for this service */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Why Choose Mass HVAC for <span className="text-accent">{service.shortName}</span> in {city.name}?</h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Licensed & Insured", desc: `Fully licensed contractor serving ${city.name} with comprehensive insurance coverage.` },
              { title: "24/7 Emergency Service", desc: "Fast response day or night, including weekends and holidays." },
              { title: "Free Estimates", desc: "Transparent, upfront pricing with no hidden fees." },
              { title: "Written Estimates", desc: `You get the ${service.shortName.toLowerCase()} price in writing before any work starts.` },
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

        </>
      )}

      {localService && (
        <section className="py-10 bg-white">
          <nav aria-label={`More HVAC pages for ${city.name}`} className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 px-4">
            {services.filter((s) => s.slug !== service.slug).map((s) => (
              <Link key={s.slug} href={`/cities/${city.slug}/${s.slug}`} className="rounded-full border border-gray-100 bg-surface px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-accent hover:text-white">
                {s.shortName}
              </Link>
            ))}
            {nearby.map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}/${service.slug}`} className="rounded-full border border-gray-100 bg-white px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-accent hover:text-white">
                {c.name}
              </Link>
            ))}
            <Link href="/cities" className="px-4 py-2 text-sm font-bold text-accent">All cities &rarr;</Link>
          </nav>
        </section>
      )}
      {!localService && (
        <>
      {/* Other services in this city */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-2">Other HVAC Services in <span className="text-accent">{city.name}, MA</span></h2>
            <p className="text-gray-600 text-sm mb-8">Explore all our professional HVAC services available in {city.name}.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} href={`/cities/${city.slug}/${s.slug}`} className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                  {SEARCH_LABEL[s.slug] ?? s.shortName} in {city.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nearby cities for this service */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />{service.shortName} in Nearby Cities
            </h2>
            <p className="text-gray-600 text-sm mb-8">We also provide {service.name.toLowerCase()} in these nearby MetroWest towns.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((c) => (
                <Link key={c.slug} href={`/cities/${c.slug}/${service.slug}`} className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
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

        </>
      )}

      {!localService && (
        <>
      {/* HVAC Resources */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-6">HVAC <span className="text-accent">Resources</span></h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blog" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
                HVAC Tips &amp; Guides
              </Link>
              <Link href="/projects" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
                View Our Projects
              </Link>
              <Link href={`/services/${service.slug}`} className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
                About {service.shortName}
              </Link>
              <Link href={`/cities/${city.slug}`} className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
                All Services in {city.name}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

        </>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Frequently Asked Questions About <span className="text-accent">{service.shortName}</span> in {city.name}</h2>
            <p className="text-gray-600 mt-3">Common questions about {service.name.toLowerCase()} in {city.name}, MA.</p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <ScrollReveal>
            <div data-own>
              <FAQAccordion items={finalFaq} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MapSection compact={Boolean(localService)} />

      {/* JSON-LD: Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.name} in ${city.name}, MA`,
        description: `${service.name} in ${city.name}, MA by Mass HVAC Inc of Milford.`,
        image: heroImage,
        serviceType: service.name,
        url: `${SITE_URL}/cities/${city.slug}/${service.slug}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Massachusetts" } },
        availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: "+1-508-786-8755", contactType: "customer service" } },
      }) }} />

      {/* JSON-LD: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/cities` },
          { "@type": "ListItem", position: 3, name: `${city.name}, MA`, item: `${SITE_URL}/cities/${city.slug}` },
          { "@type": "ListItem", position: 4, name: service.shortName, item: `${SITE_URL}/cities/${city.slug}/${service.slug}` },
        ],
      }) }} />

      {/* JSON-LD: FAQPage — derived from the SAME faqItems array rendered in
          the accordion above, so visible content and schema can never drift. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: finalFaq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }) }} />

    </>
  );
}
