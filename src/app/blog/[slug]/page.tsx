import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/70 to-primary-dark/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">MH</span>
            </div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-white/60 text-sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-accent prose-strong:text-primary-dark">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-xl font-bold text-primary-dark mt-8 mb-3">
                        {block.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (block.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl font-bold text-primary-dark mt-10 mb-4">
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (block.startsWith("- ") || block.startsWith("1. ")) {
                    const items = block.split("\n").filter((l) => l.trim());
                    const isOrdered = block.startsWith("1. ");
                    const Tag = isOrdered ? "ol" : "ul";
                    return (
                      <Tag key={i} className={`space-y-2 my-4 ${isOrdered ? "list-decimal pl-6" : ""}`}>
                        {items.map((item, j) => (
                          <li key={j} className="text-gray-600 leading-relaxed">
                            <span dangerouslySetInnerHTML={{
                              __html: item
                                .replace(/^[-\d]+[.)]\s*/, "")
                                .replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark'>$1</strong>")
                            }} />
                          </li>
                        ))}
                      </Tag>
                    );
                  }
                  if (block.startsWith("|")) {
                    // Simple table rendering
                    const rows = block.split("\n").filter((r) => r.trim() && !r.match(/^\|[-\s|]+\|$/));
                    return (
                      <div key={i} className="overflow-x-auto my-6">
                        <table className="w-full text-sm border-collapse">
                          {rows.map((row, ri) => {
                            const cells = row.split("|").filter((c) => c.trim());
                            const Tag = ri === 0 ? "th" : "td";
                            return (
                              <tr key={ri} className={ri === 0 ? "bg-primary/5" : "border-b border-gray-100"}>
                                {cells.map((cell, ci) => (
                                  <Tag key={ci} className={`px-4 py-3 text-left ${ri === 0 ? "font-semibold text-primary-dark" : "text-gray-600"}`}>
                                    {cell.trim()}
                                  </Tag>
                                ))}
                              </tr>
                            );
                          })}
                        </table>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{
                      __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark'>$1</strong>")
                    }} />
                  );
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Need HVAC Help?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our experts are ready to help with any heating or cooling need.
                  </p>
                  <a
                    href="tel:+15083869104"
                    className="block w-full text-center px-4 py-2.5 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-full transition-all mb-2"
                  >
                    (508) 386-9104
                  </a>
                  <Link
                    href="#contact"
                    className="block w-full text-center px-4 py-2.5 bg-white/10 border border-white/20 text-white font-medium text-sm rounded-full hover:bg-white/20 transition-all"
                  >
                    Free Estimate
                  </Link>
                </div>

                {/* Tags */}
                <div className="bg-surface rounded-2xl p-6">
                  <h3 className="font-bold text-primary-dark mb-3 text-sm uppercase tracking-wider">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary-dark text-center mb-10">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary-dark group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "Mass HVAC Inc",
            },
            publisher: {
              "@type": "Organization",
              name: "Mass HVAC Inc",
              logo: {
                "@type": "ImageObject",
                url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
              },
            },
          }),
        }}
      />
    </>
  );
}
