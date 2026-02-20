import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, MapPin, Shield, Clock, Star, CheckCircle, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { cities, getCityBySlug, getCityServiceContent } from "@/data/cities";
import { services, getServiceBySlug } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
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
  const title = `${service.name} in ${city.name}, MA – Licensed HVAC Contractor | Mass HVAC`;
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, Massachusetts. Fast service, fair pricing, 5-star rated, satisfaction guaranteed. Call (508) 386-9104 for a free estimate.`;
  return {
    title,
    description,
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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            {/* Breadcrumb pills */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/cities" className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full hover:bg-white/20 transition-colors">Service Areas</Link>
              <span className="text-white/30">/</span>
              <Link href={`/cities/${city.slug}`} className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full hover:bg-white/20 transition-colors">{city.name}, MA</Link>
              <span className="text-white/30">/</span>
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">{service.shortName}</span>
            </div>

            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <ServiceIcon className="w-7 h-7 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {service.name} in <span className="text-accent">{city.name}, MA</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              Looking for professional {service.name.toLowerCase()} in {city.name}, Massachusetts? Mass HVAC is the trusted local choice. Licensed, insured, and 5-star rated.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "24/7 Emergency" },
                { icon: Star, text: "5.0 Google Rating" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15083869104" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <Phone className="w-5 h-5" />(508) 386-9104
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 md:p-12">
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
                <div className="p-6 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
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
                <Link key={s.slug} href={`/cities/${city.slug}/${s.slug}`} className="px-5 py-2.5 bg-surface text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
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
                <Link key={c.slug} href={`/cities/${c.slug}/${service.slug}`} className="px-5 py-2.5 bg-white text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
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

      {/* FAQ Section (visible on page) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Frequently Asked Questions About <span className="text-accent">{service.shortName}</span> in {city.name}</h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <div className="space-y-4">
            {[
              {
                q: `How much does ${service.name.toLowerCase()} cost in ${city.name}, MA?`,
                a: `The cost of ${service.name.toLowerCase()} in ${city.name} varies depending on the scope of work. Mass HVAC provides free, no-obligation estimates. Call (508) 386-9104 for a personalized quote.`,
              },
              {
                q: `Does Mass HVAC serve ${city.name}, Massachusetts?`,
                a: `Yes! Mass HVAC proudly serves ${city.name}, MA and surrounding areas with professional ${service.name.toLowerCase()} services. We offer same-day service and 24/7 emergency response.`,
              },
              {
                q: `Why choose Mass HVAC for ${service.name.toLowerCase()} in ${city.name}?`,
                a: `Mass HVAC is a licensed and insured HVAC contractor with a 5.0 Google rating. We offer transparent pricing, 24/7 emergency service, and a 100% satisfaction guarantee for all ${service.name.toLowerCase()} work in ${city.name}, MA.`,
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 bg-surface rounded-xl">
                  <h3 className="font-bold text-primary mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      {/* JSON-LD: Service */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.name} in ${city.name}, MA`,
        description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Massachusetts by Mass HVAC Inc. Licensed, insured, 5-star rated. Call (508) 386-9104.`,
        provider: {
          "@type": "HVACBusiness",
          name: "Mass HVAC Inc",
          telephone: "+1-508-386-9104",
          url: "https://masshvac.net",
          address: { "@type": "PostalAddress", addressLocality: "Milford", addressRegion: "MA", addressCountry: "US" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "50", bestRating: "5" },
        },
        areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Massachusetts" } },
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

      {/* JSON-LD: FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `How much does ${service.name.toLowerCase()} cost in ${city.name}, MA?`, acceptedAnswer: { "@type": "Answer", text: `The cost of ${service.name.toLowerCase()} in ${city.name} varies depending on the scope of work. Mass HVAC provides free, no-obligation estimates. Call (508) 386-9104 for a personalized quote.` } },
          { "@type": "Question", name: `Does Mass HVAC serve ${city.name}, Massachusetts?`, acceptedAnswer: { "@type": "Answer", text: `Yes! Mass HVAC proudly serves ${city.name}, MA and surrounding areas with professional ${service.name.toLowerCase()} services. We offer same-day service and 24/7 emergency response.` } },
          { "@type": "Question", name: `Why choose Mass HVAC for ${service.name.toLowerCase()} in ${city.name}?`, acceptedAnswer: { "@type": "Answer", text: `Mass HVAC is a licensed and insured HVAC contractor with a 5.0 Google rating. We offer transparent pricing, 24/7 emergency service, and a 100% satisfaction guarantee for all ${service.name.toLowerCase()} work in ${city.name}, MA.` } },
        ],
      }) }} />
    </>
  );
}
