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
  const title = `${service.shortName} in ${city.name}, MA | Mass HVAC`;
  const description = `Expert ${service.shortName.toLowerCase()} in ${city.name}, MA. Fast, reliable service. Licensed & insured. Call (508) 786-8755 for a free estimate.`;

  // Defensive noindex for thin/template deep pages.
  // 50 cities × 5 services = 250 routes; without hand-written local content
  // (localIntro or named neighborhoods) the page body is largely shared
  // boilerplate. We keep these pages live and link-followable so internal
  // PageRank and the user experience are unaffected, but we exclude them
  // from the search index until Ana enriches the city in data/cities.ts.
  // The /cities/[city] HUB stays indexable regardless.
  const isIndexable = cityHasLocalContent(city);

  return {
    title,
    description,
    ...(isIndexable ? {} : { robots: { index: false, follow: true } }),
    openGraph: { title, description, url: `https://masshvac.net/cities/${city.slug}/${service.slug}`, type: "website" },
    alternates: { canonical: `https://masshvac.net/cities/${city.slug}/${service.slug}` },
  };
}

export default async function CityServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city: cs, service: ss } = await params;
  const city = getCityBySlug(cs), service = getServiceBySlug(ss);
  if (!city || !service) notFound();
  const content = getCityServiceContent(city.name, service.name, service.slug);
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
    {
      q: `How much does ${service.name.toLowerCase()} cost in ${city.name}, MA?`,
      a: `${city.name} homeowners typically pay ${tuneUp} for ${service.shortName.toLowerCase()} tune-ups, ${repair} for common repairs, and ${install} for a complete new installation. Final pricing depends on system size, brand, and site conditions; Mass HVAC provides written estimates with no surprise fees. Call (508) 786-8755 for a free quote.`,
    },
    {
      q: `Does Mass HVAC offer 24/7 emergency ${service.shortName.toLowerCase()} service in ${city.name}?`,
      a: `Yes — Mass HVAC dispatches 24/7 emergency ${service.shortName.toLowerCase()} service to ${city.name}, MA and the surrounding ${city.county} County area. Our techs carry common parts on the truck for same-visit repair on most calls. Call (508) 786-8755 day or night.`,
    },
    ...(service.extraFaq ? [service.extraFaq] : []),
    {
      q: `Is Mass HVAC licensed and insured to perform ${service.shortName.toLowerCase()} work in ${city.name}?`,
      a: `Yes. Mass HVAC holds a Massachusetts HVAC contractor license, EPA Section 608 refrigerant certification, and a Massachusetts Construction Supervisor license, and carries full general liability and workers' comp insurance. All ${service.shortName.toLowerCase()} work in ${city.name} is performed by licensed technicians and pulled with the correct local permits.`,
    },
  ];

  return (
    <>
      {/* Hero — Text left + Form right */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image src={heroImage} alt={`${service.name} in ${city.name}, Massachusetts - Mass HVAC`} fill sizes="100vw" className="object-cover object-center" priority fetchPriority="high" quality={75} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              {/* Breadcrumb pills */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Link href="/cities" className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full hover:bg-white/20 transition-colors">Service Areas</Link>
                <span className="text-white/30">/</span>
                <Link href={`/cities/${city.slug}`} className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full hover:bg-white/20 transition-colors">{city.name}, MA</Link>
                <span className="text-white/30">/</span>
                <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">{service.shortName}</span>
              </div>

              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <ServiceIcon className="w-6 h-6 text-white" />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {service.name} in <span className="text-accent">{city.name}, MA</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-xl">
                Looking for professional {service.name.toLowerCase()} in {city.name}, Massachusetts? Mass HVAC is the trusted local choice. Licensed, insured, and 5-star rated.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-6">
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
                <a href="tel:+15087868755" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <Phone className="w-5 h-5" />(508) 786-8755
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
                title={`Free ${service.shortName} Estimate in ${city.name}, MA - Mass HVAC`}
              />
            </div>
          </div>
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
              { title: "100% Satisfaction", desc: `Every ${service.name.toLowerCase()} job in ${city.name} backed by our guarantee.` },
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

      {/* Other services in this city */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-2">Other HVAC Services in <span className="text-accent">{city.name}, MA</span></h2>
            <p className="text-gray-500 text-sm mb-8">Explore all our professional HVAC services available in {city.name}.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} href={`/cities/${city.slug}/${s.slug}`} className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                  {s.icon} {s.shortName} in {city.name}
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
            <p className="text-gray-500 text-sm mb-8">We also provide {service.name.toLowerCase()} in these nearby Massachusetts communities.</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Frequently Asked Questions About <span className="text-accent">{service.shortName}</span> in {city.name}</h2>
            <p className="text-gray-500 mt-3">Common questions about {service.name.toLowerCase()} in {city.name}, Massachusetts.</p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />

      {/* JSON-LD: Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.name} in ${city.name}, MA`,
        description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Massachusetts by Mass HVAC Inc. Licensed, insured, 5-star rated. Call (508) 786-8755.`,
        image: heroImage,
        serviceType: service.name,
        url: `https://masshvac.net/cities/${city.slug}/${service.slug}`,
        provider: { "@id": "https://masshvac.net/#organization" },
        areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Massachusetts" } },
        availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: "+1-508-786-8755", contactType: "customer service" } },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", areaServed: { "@type": "City", name: city.name } },
      }) }} />

      {/* JSON-LD: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://masshvac.net/cities" },
          { "@type": "ListItem", position: 3, name: `${city.name}, MA`, item: `https://masshvac.net/cities/${city.slug}` },
          { "@type": "ListItem", position: 4, name: service.shortName, item: `https://masshvac.net/cities/${city.slug}/${service.slug}` },
        ],
      }) }} />

      {/* JSON-LD: FAQPage — derived from the SAME faqItems array rendered in
          the accordion above, so visible content and schema can never drift. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }) }} />

      {/* JSON-LD: WebPage with SpeakableSpecification */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${service.name} in ${city.name}, MA – Mass HVAC`,
        url: `https://masshvac.net/cities/${city.slug}/${service.slug}`,
        description: `Professional ${service.name.toLowerCase()} in ${city.name}, Massachusetts. Fast service, fair pricing, 5-star rated, satisfaction guaranteed. Call (508) 786-8755 for a free estimate.`,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "p"],
        },
        isPartOf: { "@id": "https://masshvac.net/#website" },
        about: { "@id": "https://masshvac.net/#organization" },
        lastReviewed: "2026-02-20",
      }) }} />
    </>
  );
}
