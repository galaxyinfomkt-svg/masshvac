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
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />{projects.length} Completed Projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold">Projects</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Browse our portfolio of completed HVAC projects. From emergency repairs to full system installations.
          </p>
          <div className="gold-divider mt-8" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <Link href={`/projects/${project.slug}`} className="group block rounded-xl overflow-hidden card-hover bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-black text-xs font-bold rounded-full uppercase tracking-wider">{project.service}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{project.city}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <span className="inline-flex items-center text-gold font-semibold text-sm">
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
      <section className="py-12 bg-gold">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Ready to Start Your Project?</h2>
              <p className="text-black/70">Quality workmanship and guaranteed satisfaction.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+15083869104" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5" />(508) 386-9104
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
