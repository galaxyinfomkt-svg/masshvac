import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Zap, ShieldCheck, FileText, Clock } from "lucide-react";
import { projects } from "@/data/projects";
import { photos } from "@/data/photos";
import PhotoGallery from "@/components/PhotoGallery";
import ProjectCards from "@/components/ProjectCards";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL, PHONE_DISPLAY, TEL_HREF } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "HVAC Project Portfolio",
  description: "Heating, AC, heat pump and ductless mini-split projects by Mass HVAC in Milford and MetroWest, MA, with install photos. Call (508) 786-8755.",
  path: "/projects",
});

export default function ProjectsPage() {
  const towns = new Set(projects.map((p) => p.city)).size;
  const stats = [
    { value: projects.length, label: "Featured projects" },
    { value: towns, label: "MetroWest towns" },
    { value: photos.length, label: "Install photos" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        <Image src="/geo/d029-1200.jpg" alt="" fill sizes="100vw" className="object-cover object-center" priority fetchPriority="high" />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <Zap className="h-4 w-4 text-accent-on-dark" aria-hidden="true" />
              Portfolio
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              The work, <span className="text-accent-on-dark">up close</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Heat pumps, ductless mini-splits, air conditioning and heating installs across Milford and MetroWest, Massachusetts.
            </p>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="glass-premium rounded-2xl p-4 sm:p-6">
                <dd className="text-3xl font-bold text-accent-on-dark sm:text-5xl">{s.value}</dd>
                <dt className="mt-1 text-xs text-white/80 sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Install gallery</p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              Work in <span className="text-accent">photos</span>
            </h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <PhotoGallery />
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Case studies</p>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              Featured <span className="text-accent">projects</span>
            </h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <ProjectCards projects={projects.map(({ slug, title, service, city, image, description }) => ({ slug, title, service, city, image, description }))} />
        </div>
      </section>

      {/* Trust band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-16 text-white noise-texture">
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Licensed & insured", text: "Based in Milford, MA." },
            { icon: FileText, title: "Free written estimates", text: "You see the price before work starts." },
            { icon: Clock, title: "24/7 emergency calls", text: "Day or night, call us." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent shadow-[0_4px_15px_rgba(200,16,46,0.35)]">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent via-accent to-accent-dark py-14 noise-texture">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white md:text-4xl">Planning a project?</h2>
              <p className="text-white/80">Tell us what you need and get a free written estimate.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <a href={TEL_HREF} className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <Link href="#quote" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-accent">
                Free Estimate <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-xl font-bold text-primary">
            Related <span className="text-accent">Pages</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/services", label: "All HVAC Services" },
              { href: "/cities", label: "Service Areas" },
              { href: "/blog", label: "HVAC Blog" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-gray-100 bg-surface px-5 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-accent hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CollectionPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "HVAC Projects in MetroWest, MA",
        description: "HVAC projects by Mass HVAC in Milford and MetroWest, MA.",
        url: `${SITE_URL}/projects`,
        publisher: {
          "@type": "Organization",
          name: "Mass HVAC Inc",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}/projects/${project.slug}`,
            name: project.title,
          })),
        },
      }) }} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        ],
      }) }} />

      {/* WebPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "HVAC Projects in MetroWest, MA",
        url: `${SITE_URL}/projects`,
        description: "HVAC projects by Mass HVAC in Milford and MetroWest, MA.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` }
      }) }} />
    </>
  );
}
