import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, AlertCircle, CheckCircle2, Flame, Snowflake, Wind, Wrench, AirVent, type LucideIcon } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import ScrollReveal from "@/components/ScrollReveal";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";
import { formatRange } from "@/data/services";
import { PHONE_DISPLAY, TEL_HREF, SITE_URL } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "heating-installation-repair": Flame,
  "air-conditioning-installation-repair": Snowflake,
  "heat-pumps-ductless-mini-splits": Wind,
  "hvac-maintenance-tune-ups": Wrench,
  "indoor-air-quality": AirVent,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    imageAlt: service.name,
  });
}

function serviceFaq(service: NonNullable<ReturnType<typeof getServiceBySlug>>) {
  const n = service.name.toLowerCase();
  const sn = service.shortName.toLowerCase();
  const costParts = [
    service.tuneUpRange && formatRange(service.tuneUpRange),
    service.repairRange && formatRange(service.repairRange),
    service.installRange && formatRange(service.installRange),
  ].filter(Boolean);
  const items = [
    {
      q: `How much does ${n} cost in MetroWest, MA?`,
      a: `Typical ranges we see: ${costParts.join("; ")}. Your price depends on the system size, brand and the condition of your home, so we give you a written estimate before any work starts. Call ${PHONE_DISPLAY} for a free estimate.`,
    },
    {
      q: `Do you offer emergency ${sn} service?`,
      a: `Yes. We take emergency calls 24/7 for homes in Milford and across MetroWest. Call ${PHONE_DISPLAY} and we will tell you when a technician can get there.`,
    },
    {
      q: `What areas do you serve for ${n}?`,
      a: `We are based in Milford, MA and serve 50 towns around it, including Framingham, Natick, Marlborough, Hudson, Hopkinton, Westborough, Shrewsbury, Ashland and Holliston. See the full list on our Service Areas page.`,
    },
    ...(service.extraFaq ? [service.extraFaq] : []),
  ];
  return items;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const popularCities = cities.slice(0, 20);
  const faqItems = serviceFaq(service);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src={service.heroImage} alt={`${service.name} by Mass HVAC`} fill sizes="100vw" quality={75} className="object-cover object-center" priority fetchPriority="high" />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-semibold">{service.name}</li>
              </ol>
            </nav>

            {(() => {
              const Icon = SERVICE_ICONS[service.slug];
              return Icon ? (
                <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-[0_4px_15px_rgba(200,16,46,0.3)]">
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
              ) : null;
            })()}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.name}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={TEL_HREF}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points + Solutions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Why Homeowners Choose Us for <span className="text-accent">{service.shortName}</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Sound Familiar?</h3>
              </div>
              <div className="space-y-4">
                {service.painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border-l-4 border-red-300">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary">We Fix It Right.</h3>
              </div>
              <div className="space-y-4">
                {service.solutions.map((sol) => (
                  <div key={sol} className="flex items-start gap-4 p-5 bg-emerald-50/50 rounded-xl border-l-4 border-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{sol}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8">
                About Our {service.shortName} <span className="text-accent">Services</span>
              </h2>
              <div className="md-content">{renderMarkdown(service.content)}</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {service.shortName} Available In <span className="text-accent">Your City</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              We serve Milford and 49 nearby MetroWest towns. Find {service.shortName.toLowerCase()} service near you.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}/${service.slug}`}
                className="px-4 py-2 bg-surface hover:bg-accent hover:text-white text-gray-600 text-sm font-medium rounded-full border border-gray-100 transition-all duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
              >
                {city.name}, MA
              </Link>
            ))}
            <Link
              href="/cities"
              className="px-4 py-2 bg-accent/5 text-accent text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all"
            >
              All Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section — matches FAQPage schema */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {service.shortName} <span className="text-accent">FAQ</span>
            </h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-12 bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-6">
              {service.shortName} <span className="text-accent">Resources</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blog" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                HVAC Tips & Blog
              </Link>
              <Link href="/projects" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                View Our Projects
              </Link>
              <Link href="/services" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                All Services
              </Link>
              <Link href="/cities" className="px-5 py-2.5 bg-white border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm">
                Service Areas
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ReviewsWidget />
      <MapSection />

      {/* Service JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.metaDescription,
            url: `https://masshvac.net/services/${service.slug}`,
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
            areaServed: { "@type": "AdministrativeArea", name: "MetroWest, Massachusetts" },
            image: service.heroImage,
            serviceType: service.name,
            availableChannel: {
              "@type": "ServiceChannel",
              servicePhone: {
                "@type": "ContactPoint",
                telephone: "+1-508-786-8755",
                contactType: "customer service",
              },
            },
          }),
        }}
      />

      {/* Breadcrumb JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              {
                "@type": "ListItem",
                position: 3,
                name: service.name,
                item: `https://masshvac.net/services/${service.slug}`,
              },
            ],
          }),
        }}
      />

      {/* FAQ JSON-LD — same array as the visible accordion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />

    </>
  );
}
