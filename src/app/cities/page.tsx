import Link from "next/link";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | HVAC Services Across Massachusetts",
  description:
    "Mass HVAC serves 100+ cities across Massachusetts with expert heating, cooling & HVAC services. Find your city and get a free estimate today!",
};

export default function CitiesPage() {
  // Group cities alphabetically
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            HVAC Service <span className="text-accent-light">Areas</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Mass HVAC proudly serves over 100 cities and towns across Massachusetts with expert
            heating, cooling, and indoor air quality services.
          </p>
        </div>
      </section>

      {/* Services quick links */}
      <section className="py-8 bg-surface border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="px-4 py-2 bg-white text-primary text-sm font-medium rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all"
              >
                {service.icon} {service.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          {/* Alphabet nav */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sortedLetters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Cities by letter */}
          <div className="space-y-12">
            {sortedLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="text-3xl font-extrabold text-primary-dark mb-6 border-b-2 border-primary/20 pb-2">
                  {letter}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {grouped[letter].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/cities/${city.slug}`}
                      className="group p-4 bg-surface rounded-xl hover:bg-primary hover:text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <p className="font-semibold text-primary-dark group-hover:text-white transition-colors">
                        {city.name}
                      </p>
                      <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors mt-1">
                        MA • HVAC Services
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
      <ContactForm />
    </>
  );
}
