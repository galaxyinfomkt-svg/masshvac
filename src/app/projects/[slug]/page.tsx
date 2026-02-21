import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, ArrowLeft, AlertCircle, CheckCircle2, Clock, Wrench, Award, TrendingUp } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} in ${project.city} – Mass HVAC`,
    description: project.description,
    openGraph: { title: `${project.title} – Mass HVAC`, description: project.description, url: `https://masshvac.net/projects/${project.slug}`, type: "article", images: [{ url: project.image, width: 1200, height: 630, alt: project.title }] },
    alternates: { canonical: `https://masshvac.net/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const related = projects.filter((p) => p.service === project.service && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />Back to Projects
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">{project.service}</span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">{project.city}</span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">{project.scope}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="relative h-80 md:h-[480px] rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] mb-10">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              </ScrollReveal>

              {/* Overview */}
              <ScrollReveal delay={0.1}>
                <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
                {project.overview.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{para}</p>
                ))}
              </ScrollReveal>

              {/* Problem */}
              <ScrollReveal delay={0.2}>
                <div className="bg-red-50/70 rounded-xl p-8 mb-6 mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700">The Challenge</h3>
                  </div>
                  {project.problem.split("\n\n").map((para, i) => (
                    <p key={i} className="text-red-800/70 leading-relaxed mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Solution */}
              <ScrollReveal delay={0.3}>
                <div className="bg-emerald-50/70 rounded-xl p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-700">Our Solution</h3>
                  </div>
                  {project.solution.split("\n\n").map((para, i) => (
                    <p key={i} className="text-emerald-800/70 leading-relaxed mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Results */}
              {project.results.length > 0 && (
                <ScrollReveal delay={0.4}>
                  <div className="bg-blue-50/70 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-700">Results & Outcomes</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                          <span className="text-blue-800/70 leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="bg-surface rounded-xl p-7">
                  <h3 className="font-bold text-primary mb-5 text-sm uppercase tracking-wider">Project Details</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Wrench, label: "Service", value: project.service },
                      { label: "Location", value: project.city },
                      { icon: Clock, label: "Duration", value: project.duration },
                      { icon: Award, label: "Equipment", value: project.systemBrand },
                      { label: "Scope", value: project.scope },
                      { label: "Result", value: "Completed Successfully", color: "text-emerald-600" },
                    ].map((d) => (
                      <div key={d.label}>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-1">{d.label}</p>
                        <p className={`font-bold ${d.color || "text-primary"}`}>{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black rounded-xl p-7 border border-white/10">
                  <h3 className="font-bold text-accent text-lg mb-2">Need Similar Work?</h3>
                  <p className="text-white/50 text-sm mb-6">Get a free estimate for your {project.service.toLowerCase()} project.</p>
                  <a href="tel:+15087404113" className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] mb-3">
                    <Phone className="w-4 h-4" />(508) 740-4113
                  </a>
                  <Link href="#contact" className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
                    Free Estimate <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold text-primary text-center mb-10">Related <span className="text-accent">Projects</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`} className="group block rounded-xl overflow-hidden border border-gray-100 card-premium bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-accent text-white text-xs font-bold rounded-full">{proj.service}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{proj.title}</h3>
                    <p className="text-gray-400 text-sm">{proj.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-xl font-bold text-primary mb-6">Explore <span className="text-accent">More</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
              All HVAC Services
            </Link>
            <Link href="/projects" className="px-5 py-2.5 bg-surface border border-gray-100 text-gray-600 font-medium rounded-full hover:bg-accent hover:text-white transition-all duration-200 text-sm">
              More Projects
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

      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
          { "@type": "ListItem", position: 2, name: "Projects", item: "https://masshvac.net/projects" },
          { "@type": "ListItem", position: 3, name: project.title, item: `https://masshvac.net/projects/${project.slug}` },
        ],
      }) }} />

      {/* CreativeWork JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: project.image,
        author: { "@id": "https://masshvac.net/#organization" },
        about: {
          "@type": "Service",
          name: project.service,
          provider: { "@id": "https://masshvac.net/#organization" },
        },
        locationCreated: {
          "@type": "Place",
          name: `${project.city}, Massachusetts`,
        },
        publisher: { "@id": "https://masshvac.net/#organization" },
      }) }} />
    </>
  );
}
