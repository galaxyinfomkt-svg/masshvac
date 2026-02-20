import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Blog | Tips, Guides & News – Mass HVAC",
  description: "Expert HVAC tips, guides, and news for Massachusetts homeowners. Learn about heating, cooling, energy efficiency, and indoor air quality.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-accent-light" />
            <span className="text-sm text-white/80 font-medium">Expert HVAC Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            HVAC <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Tips, guides, and insights to help Massachusetts homeowners make smart decisions about heating, cooling, and air quality.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden card-hover border border-gray-100">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-dark mb-4 group-hover:text-primary transition-colors tracking-tight">{featured.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/5 rounded-full flex items-center justify-center"><span className="text-primary text-xs font-bold">MH</span></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{featured.author}</p>
                      <p className="text-xs text-gray-400">{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 gradient-mesh-light">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-extrabold text-primary-dark mb-10 tracking-tight">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 bg-primary/5 text-primary text-xs font-semibold rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
