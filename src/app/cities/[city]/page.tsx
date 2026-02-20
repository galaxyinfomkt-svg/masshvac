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
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />{city.name}, Massachusetts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              HVAC Services in <span className="text-gold">{city.name}, MA</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-xl">
              Mass HVAC provides professional heating, cooling, and indoor air quality services to homes and businesses in {city.name}, Massachusetts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15083869104" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-gold-dark text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03]">
                <Phone className="w-5 h-5" />(508) 386-9104
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
                Free Estimate in {city.name} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services in this city */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900">Our Services in <span className="text-gold">{city.name}, MA</span></h2>
            <p className="text-gray-500 mt-3">Click any service for details specific to {city.name}.</p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link href={`/cities/${city.slug}/${service.slug}`} className="group block p-7 bg-surface rounded-xl card-hover">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-dark-900 group-hover:text-gold transition-colors mb-2">{service.shortName}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.name} in {city.name}, MA</p>
                    <span className="inline-flex items-center text-gold font-semibold text-sm">
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
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 md:p-12">
              {content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) return <h2 key={i} className="text-3xl font-bold text-dark-900 mt-8 mb-4">{block.replace("## ", "")}</h2>;
                if (block.startsWith("### ")) return <h3 key={i} className="text-2xl font-bold text-dark-900 mt-6 mb-3">{block.replace("### ", "")}</h3>;
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {block.split("\n").filter((l) => l.startsWith("- ")).map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-dark-900'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-dark-900'>$1</strong>") }} />;
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
