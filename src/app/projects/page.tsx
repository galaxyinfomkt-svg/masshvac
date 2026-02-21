import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | HVAC Portfolio – Mass HVAC",
  description: "See our completed HVAC projects across Massachusetts — furnace installations, AC replacements, mini-splits, duct cleaning & more.",
  openGraph: {
    title: "Our Projects | HVAC Portfolio – Mass HVAC",
    description: "See our completed HVAC projects across Massachusetts — furnace installations, AC replacements, mini-splits, duct cleaning & more.",
    type: "website",
    url: "https://masshvac.net/projects",
  },
  alternates: { canonical: "https://masshvac.net/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c03544725a0db8.jpg" alt="HVAC projects portfolio Massachusetts" fill className="object-cover object-center" priority quality={85} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />{projects.length} Completed Projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Browse our portfolio of completed HVAC projects. From emergency repairs to full system installations.
          </p>
          <div className="accent-divider mt-8" />
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <Link href={`/projects/${project.slug}`} className="group block rounded-xl overflow-hidden border border-gray-100 card-premium bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">{project.service}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{project.city}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <span className="inline-flex items-center text-accent font-semibold text-sm">
                      View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-accent via-accent to-accent-dark relative overflow-hidden noise-texture">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Start Your Project?</h2>
              <p className="text-white/70">Quality workmanship and guaranteed satisfaction.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+15087404113" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5" />(508) 740-4113
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-accent transition-all duration-300">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-xl font-bold text-primary mb-6">Related <span className="text-accent">Pages</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
              All HVAC Services
            </Link>
            <Link href="/cities" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
              Service Areas
            </Link>
            <Link href="/blog" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
              HVAC Blog
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* CollectionPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Our Projects | HVAC Portfolio – Mass HVAC",
        description: "See our completed HVAC projects across Massachusetts — furnace installations, AC replacements, mini-splits, duct cleaning & more.",
        url: "https://masshvac.net/projects",
        publisher: {
          "@type": "Organization",
          name: "Mass HVAC Inc",
          logo: { "@type": "ImageObject", url: "https://masshvac.net/logo.png" },
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://masshvac.net/projects/${project.slug}`,
            name: project.title,
          })),
        },
      }) }} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
          { "@type": "ListItem", position: 2, name: "Projects", item: "https://masshvac.net/projects" },
        ],
      }) }} />

      {/* WebPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Our Projects | HVAC Portfolio – Mass HVAC",
        url: "https://masshvac.net/projects",
        description: "See our completed HVAC projects across Massachusetts — furnace installations, AC replacements, mini-splits, duct cleaning & more.",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2"]
        },
        isPartOf: { "@id": "https://masshvac.net/#website" },
        about: { "@id": "https://masshvac.net/#organization" }
      }) }} />
    </>
  );
}
