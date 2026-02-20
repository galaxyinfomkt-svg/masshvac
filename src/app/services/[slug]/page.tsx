import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: { title: service.metaTitle, description: service.metaDescription, images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.name }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const popularCities = cities.slice(0, 20);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <Image src={service.heroImage} alt={service.name} fill className="object-cover" priority />
        <div className="absolute inset-0 gradient-mesh opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <span className="text-5xl block mb-5">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
              {service.name}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">{service.description}</p>
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

      {/* Pain points + Solutions */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-6">
                <AlertCircle className="w-3.5 h-3.5" /> Common Problems
              </span>
              <h2 className="text-3xl font-extrabold text-primary-dark mb-8 tracking-tight">Sound Familiar?</h2>
              <div className="space-y-4">
                {service.painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 p-5 bg-red-50/50 rounded-2xl border border-red-100/50">
                    <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm font-semibold rounded-full mb-6">
                <CheckCircle2 className="w-3.5 h-3.5" /> Our Solutions
              </span>
              <h2 className="text-3xl font-extrabold text-primary-dark mb-8 tracking-tight">We Fix It Right.</h2>
              <div className="space-y-4">
                {service.solutions.map((sol) => (
                  <div key={sol} className="flex items-start gap-4 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                    <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{sol}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 gradient-mesh-light">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
              {service.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**"))
                  return <h3 key={i} className="text-2xl font-extrabold text-primary-dark mt-8 mb-4">{paragraph.replace(/\*\*/g, "")}</h3>;
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- \*?\*?/, "").replace(/\*?\*?$/, "") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>;
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-dark tracking-tight">
              {service.shortName} Service Available In
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {popularCities.map((city) => (
              <Link key={city.slug} href={`/cities/${city.slug}/${service.slug}`} className="px-4 py-2 bg-surface hover:bg-primary hover:text-white text-gray-600 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-md border border-gray-100 hover:border-primary">
                {city.name}, MA
              </Link>
            ))}
            <Link href="/cities" className="px-4 py-2 bg-accent/5 text-accent text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all border border-accent/20 hover:border-accent">
              All Cities →
            </Link>
          </div>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />
      <ContactForm />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.description,
        provider: { "@type": "HVACBusiness", name: "Mass HVAC Inc", telephone: "+1-508-386-9104", address: { "@type": "PostalAddress", addressLocality: "Milford", addressRegion: "MA", addressCountry: "US" } },
        areaServed: { "@type": "State", name: "Massachusetts" }, image: service.heroImage,
      }) }} />
    </>
  );
}
