import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { cities, getCityBySlug, getCityContent } from "@/data/cities";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export function generateStaticParams() { return cities.map((c) => ({ city: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `HVAC Services in ${city.name}, MA | Heating & Cooling – Mass HVAC`,
    description: `Professional HVAC services in ${city.name}, Massachusetts. Heating, cooling, mini-splits, maintenance & more. 24/7 emergency service. Call Mass HVAC!`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();
  const content = getCityContent(city.name);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <MapPin className="w-4 h-4 text-accent-light" />
              <span className="text-sm text-white/80 font-medium">{city.name}, Massachusetts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
              HVAC Services in <span className="text-gradient">{city.name}, MA</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
              Mass HVAC provides professional heating, cooling, and indoor air quality services to homes and businesses in {city.name}, Massachusetts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15083869104" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent">
                <Phone className="w-5 h-5" />(508) 386-9104
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/15 hover:scale-[1.03]">
                Free Estimate in {city.name} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services in this city */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark tracking-tight">Our Services in {city.name}, MA</h2>
            <p className="text-gray-500 mt-3">Click any service for details specific to {city.name}.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link href={`/cities/${city.slug}/${service.slug}`} className="group block p-7 bg-surface rounded-2xl card-hover border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors mb-2">{service.shortName}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.name} in {city.name}, MA</p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 gradient-mesh-light">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
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

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: `HVAC Services in ${city.name}, MA`,
        description: `Professional heating, cooling & HVAC services in ${city.name}, Massachusetts by Mass HVAC Inc.`,
        provider: { "@type": "HVACBusiness", name: "Mass HVAC Inc", telephone: "+1-508-386-9104" },
        areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Massachusetts" } },
      }) }} />
    </>
  );
}
