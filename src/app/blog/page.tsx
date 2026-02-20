import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Blog | Tips, Guides & News – Mass HVAC",
  description:
    "Expert HVAC tips, guides, and news for Massachusetts homeowners. Learn about heating, cooling, energy efficiency, and indoor air quality from Mass HVAC.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            HVAC <span className="text-accent-light">Blog</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Expert tips, guides, and insights to help Massachusetts homeowners make smart
            decisions about their heating, cooling, and indoor air quality.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">MH</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{featured.author}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center text-accent font-semibold text-sm gap-1 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary-dark mb-10">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
