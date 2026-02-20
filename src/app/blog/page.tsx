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
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />Expert HVAC Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            HVAC <span className="text-gold">Blog</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tips, guides, and insights to help Massachusetts homeowners make smart decisions about heating, cooling, and air quality.
          </p>
          <div className="gold-divider mt-8" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Featured */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl overflow-hidden card-hover">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-black text-xs font-bold rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4 group-hover:text-gold transition-colors">{featured.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center"><span className="text-black text-xs font-bold">MH</span></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{featured.author}</p>
                      <p className="text-xs text-gray-400">{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-gold font-bold text-sm">
                    Read <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-dark-900 mb-10">Latest <span className="text-gold">Articles</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden card-hover">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 bg-gold/10 text-gold text-xs font-semibold rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
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
