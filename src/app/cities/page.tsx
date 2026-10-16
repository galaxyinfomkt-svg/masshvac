import Image from "next/image";
import Link from "next/link";
import { MapPin, Flame, Snowflake, Wind, Wrench, AirVent, Shield, Clock, Star } from "lucide-react";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/data/company";
import { averageRating } from "@/data/reviews";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export const metadata: Metadata = buildMetadata({
  title: "HVAC Service Areas in MetroWest, MA",
  description: "Mass HVAC is based in Milford, MA and serves 50 towns across MetroWest and nearby, from Framingham and Natick to Westborough and Acton.",
  path: "/cities",
});

export default function CitiesPage() {
  const grouped = cities.reduce<Record<string, typeof cities>>((acc, city) => {
    const letter = city.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(city);
    return acc;
  }, {});
  Object.values(grouped).forEach((list) => list.sort((x, y) => x.name.localeCompare(y.name)));
  const sortedLetters = Object.keys(grouped).sort();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885315ba498e66200370c.jpg" alt="" fill sizes="100vw" className="object-cover object-center" priority fetchPriority="high" quality={75} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />{cities.length} Towns Served
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            MetroWest HVAC Service <span className="text-accent">Areas</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Mass HVAC is based in Milford, MA and serves these 50 towns with heating, cooling, heat pump and indoor air quality service. Pick your town for local details.</p>
          <div className="accent-divider mt-8" />

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Clock, text: "24/7 Emergency Service" },
              { icon: Star, text: `${averageRating.toFixed(1)} Google Rating` },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon className="w-4 h-4 text-accent" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services bar */}
      <section className="py-4 bg-surface border-b border-gray-100 sticky top-[72px] z-30 backdrop-blur-md bg-surface/95">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 text-gray-600 text-sm font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
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
              <a key={letter} href={`#letter-${letter}`} className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface text-primary font-bold text-sm hover:bg-accent hover:text-white transition-all duration-200">
                {letter}
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {sortedLetters.map((letter) => (
              <ScrollReveal key={letter}>
                <div id={`letter-${letter}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-4xl font-bold text-accent">{letter}</h2>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {grouped[letter].map((city) => (
                      <Link
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="group p-4 bg-surface border border-gray-100 rounded-xl hover:bg-accent hover:text-white transition-all duration-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                      >
                        <p className="font-semibold text-primary group-hover:text-white transition-colors text-sm">{city.name}</p>
                        <p className="text-xs text-gray-600 group-hover:text-white/90 transition-colors mt-0.5">MA &bull; HVAC Services</p>
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

      {/* JSON-LD: ItemList of cities */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Mass HVAC Service Areas in MetroWest, MA",
        description: "Towns served by Mass HVAC Inc of Milford, MA for heating, cooling and HVAC service.",
        numberOfItems: cities.length,
        itemListElement: cities.map((city, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${city.name}, MA`,
          url: `${SITE_URL}/cities/${city.slug}`,
        })),
      }) }} />

      {/* JSON-LD: BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/cities` },
        ],
      }) }} />

    </>
  );
}
