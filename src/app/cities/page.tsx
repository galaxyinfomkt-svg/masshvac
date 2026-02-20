import Link from "next/link";
import { MapPin, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export const metadata: Metadata = {
  title: "Service Areas | HVAC Services Across Massachusetts",
  description: "Mass HVAC serves 100+ cities across Massachusetts with expert heating, cooling & HVAC services. Find your city and get a free estimate today!",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />100+ Cities &amp; Towns
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            HVAC Service <span className="text-gold">Areas</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Mass HVAC proudly serves over 100 cities and towns across Massachusetts.
          </p>
          <div className="gold-divider mt-8" />
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
                <Link key={s.slug} href={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full hover:bg-gold hover:text-black transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
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
          <div className="flex flex-wrap justify-center gap-1.5 mb-16">
            {sortedLetters.map((letter) => (
              <a key={letter} href={`#letter-${letter}`} className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface text-dark-900 font-bold text-sm hover:bg-gold hover:text-black transition-all duration-200">
                {letter}
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {sortedLetters.map((letter) => (
              <ScrollReveal key={letter}>
                <div id={`letter-${letter}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-gold/30">{letter}</span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {grouped[letter].map((city) => (
                      <Link
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="group p-4 bg-surface rounded-xl hover:bg-gold hover:text-black transition-all duration-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
                      >
                        <p className="font-semibold text-dark-900 group-hover:text-black transition-colors text-sm">{city.name}</p>
                        <p className="text-[11px] text-gray-400 group-hover:text-black/60 transition-colors mt-0.5">MA &bull; HVAC Services</p>
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
    </>
  );
}
