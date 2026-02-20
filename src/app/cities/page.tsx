import Link from "next/link";
import { MapPin, Flame, Snowflake, Wind, Wrench, AirVent, Phone, ArrowRight, Shield, Clock, Star } from "lucide-react";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export const metadata: Metadata = {
  title: "Service Areas | HVAC Services in 100+ Massachusetts Cities – Mass HVAC",
  description:
    "Mass HVAC serves 100+ cities and towns across Massachusetts with expert heating, cooling, mini-split & indoor air quality services. Licensed & insured. Call (508) 386-9104 for a free estimate!",
  openGraph: {
    title: "Service Areas | HVAC Services in 100+ Massachusetts Cities – Mass HVAC",
    description:
      "Mass HVAC serves 100+ cities and towns across Massachusetts with expert heating, cooling, mini-split & indoor air quality services. Licensed & insured. Call (508) 386-9104 for a free estimate!",
    url: "https://masshvac.net/cities",
    type: "website",
  },
  alternates: { canonical: "https://masshvac.net/cities" },
};

export default function CitiesPage() {
  const grouped = cities.reduce<Record<string, typeof cities>>((acc, city) => {
    const letter = city.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(city);
    return acc;
  }, {});
  const sortedLetters = Object.keys(grouped).sort();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />100+ Cities &amp; Towns
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Massachusetts HVAC Service <span className="text-accent">Areas</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Mass HVAC proudly serves over 100 cities and towns across Massachusetts with professional heating, cooling, mini-split, and indoor air quality services.
          </p>
          <div className="accent-divider mt-8" />

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Clock, text: "24/7 Emergency Service" },
              { icon: Star, text: "5.0 Google Rating" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon className="w-4 h-4 text-accent" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services bar */}
      <section className="py-4 bg-surface border-b border-gray-100 sticky top-[64px] z-30 backdrop-blur-md bg-surface/95">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  <Icon className="w-3.5 h-3.5" />{s.shortName}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          {/* Alphabet navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-16">
            {sortedLetters.map((letter) => (
              <a key={letter} href={`#letter-${letter}`} className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface text-primary font-bold text-sm hover:bg-accent hover:text-white transition-all duration-200">
                {letter}
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {sortedLetters.map((letter) => (
              <ScrollReveal key={letter}>
                <div id={`letter-${letter}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-accent/30">{letter}</span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {grouped[letter].map((city) => (
                      <Link
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="group p-4 bg-surface rounded-xl hover:bg-accent hover:text-white transition-all duration-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                      >
                        <p className="font-semibold text-primary group-hover:text-white transition-colors text-sm">{city.name}</p>
                        <p className="text-[11px] text-gray-400 group-hover:text-white/70 transition-colors mt-0.5">MA &bull; HVAC Services</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
      <ContactForm />

      {/* JSON-LD: ItemList of cities */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Mass HVAC Service Areas in Massachusetts",
        description: "Complete list of cities and towns served by Mass HVAC Inc for heating, cooling, and HVAC services in Massachusetts.",
        numberOfItems: cities.length,
        itemListElement: cities.slice(0, 50).map((city, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${city.name}, MA`,
          url: `https://masshvac.net/cities/${city.slug}`,
        })),
      }) }} />

      {/* JSON-LD: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://masshvac.net/cities" },
        ],
      }) }} />

      {/* JSON-LD: LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: "Mass HVAC Inc",
        telephone: "+1-508-386-9104",
        url: "https://masshvac.net",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Milford",
          addressRegion: "MA",
          postalCode: "01757",
          addressCountry: "US",
        },
        areaServed: cities.map((city) => ({
          "@type": "City",
          name: city.name,
          containedInPlace: { "@type": "State", name: "Massachusetts" },
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "50",
          bestRating: "5",
        },
      }) }} />
    </>
  );
}
