import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | HVAC Portfolio – Mass HVAC",
  description:
    "See our completed HVAC projects across Massachusetts — furnace installations, AC replacements, mini-splits, duct cleaning & more. Quality work, guaranteed.",
};

export default function ProjectsPage() {
  // Get unique service categories
  const serviceCategories = [...new Set(projects.map((p) => p.service))];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-accent-light">Projects</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Browse our portfolio of completed HVAC projects across Massachusetts. From emergency repairs
            to full system installations, see the quality and care we bring to every job.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-6 bg-surface border-b sticky top-[72px] z-30 backdrop-blur-md bg-surface/95">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
              All Projects
            </span>
            {serviceCategories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full shadow-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      {project.service}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.city}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-accent font-semibold text-sm gap-1 group-hover:gap-3 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-8">
            Whether it&apos;s a simple repair or a complete system installation, Mass HVAC delivers
            quality workmanship and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15083869104"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all hover:scale-105"
            >
              Call (508) 386-9104
            </a>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-primary-dark font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
