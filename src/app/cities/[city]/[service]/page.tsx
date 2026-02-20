import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { cities, getCityBySlug, getCityServiceContent } from "@/data/cities";
import { services, getServiceBySlug } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) for (const service of services) params.push({ city: city.slug, service: service.slug });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city: cs, service: ss } = await params;
  const city = getCityBySlug(cs), service = getServiceBySlug(ss);
  if (!city || !service) return {};
  const title = `${service.name} in ${city.name}, MA – Mass HVAC`;
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, Massachusetts. Fast service, fair pricing, satisfaction guaranteed. Call (508) 386-9104.`;
  return { title, description, openGraph: { title, description } };
}

export default async function CityServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city: cs, service: ss } = await params;
  const city = getCityBySlug(cs), service = getServiceBySlug(ss);
  if (!city || !service) notFound();
  const content = getCityServiceContent(city.name, service.name, service.slug);
  const cityIndex = cities.findIndex((c) => c.slug === city.slug);
  const nearby = cities.filter((_, i) => Math.abs(i - cityIndex) > 0 && Math.abs(i - cityIndex) <= 5).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href={`/cities/${city.slug}`} className="px-3 py-1 glass text-white/70 text-sm rounded-full hover:bg-white/15 transition-colors">{city.name}, MA</Link>
              <span className="text-white/30">/</span>
              <Link href={`/services/${service.slug}`} className="px-3 py-1 glass text-white/70 text-sm rounded-full hover:bg-white/15 transition-colors">{service.shortName}</Link>
            </div>
            <span className="text-5xl block mb-5">{service.icon}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
              {service.name} in <span className="text-gradient">{city.name}, MA</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              Looking for professional {service.name.toLowerCase()} in {city.name}, Massachusetts? Mass HVAC is the trusted local choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15083869104" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent">
                <Phone className="w-5 h-5" />(508) 386-9104
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/15 hover:scale-[1.03]">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12">
              {content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) return <h2 key={i} className="text-3xl font-extrabold text-primary-dark mt-8 mb-4 tracking-tight">{block.replace("## ", "")}</h2>;
                if (block.startsWith("### ")) return <h3 key={i} className="text-2xl font-bold text-primary-dark mt-6 mb-3">{block.replace("### ", "")}</h3>;
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {block.split("\n").filter((l) => l.startsWith("- ")).map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark'>$1</strong>") }} />;
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 gradient-mesh-light">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 tracking-tight">Other HVAC Services in {city.name}, MA</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.filter((s) => s.slug !== service.slug).map((s) => (
              <Link key={s.slug} href={`/cities/${city.slug}/${s.slug}`} className="px-5 py-2.5 bg-white text-gray-600 font-medium rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all duration-200 border border-gray-100 hover:border-primary text-sm">
                {s.icon} {s.shortName} in {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-8 tracking-tight flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />{service.shortName} in Nearby Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearby.map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}/${service.slug}`} className="px-5 py-2.5 bg-surface text-gray-600 font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-200 border border-gray-100 hover:border-primary text-sm">
                {c.name}, MA
              </Link>
            ))}
            <Link href="/cities" className="px-5 py-2.5 bg-accent/5 text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all border border-accent/20 hover:border-accent text-sm">
              All Cities →
            </Link>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: `${service.name} in ${city.name}, MA`,
        provider: { "@type": "HVACBusiness", name: "Mass HVAC Inc", telephone: "+1-508-386-9104", address: { "@type": "PostalAddress", addressLocality: "Milford", addressRegion: "MA", addressCountry: "US" } },
        areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Massachusetts" } },
      }) }} />
    </>
  );
}
