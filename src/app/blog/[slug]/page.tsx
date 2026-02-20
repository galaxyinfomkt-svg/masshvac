import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export function generateStaticParams() { return blogPosts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle, description: post.metaDescription,
    openGraph: { title: post.metaTitle, description: post.metaDescription, type: "article", publishedTime: post.date, authors: [post.author], images: [{ url: post.image, width: 1200, height: 630, alt: post.title }] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/70 to-primary-dark/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 glass text-white text-xs font-semibold rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center"><span className="text-white text-sm font-bold">MH</span></div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-white/50 text-sm">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  {post.content.split("\n\n").map((block, i) => {
                    if (block.startsWith("### ")) return <h3 key={i} className="text-xl font-extrabold text-primary-dark mt-10 mb-3">{block.replace("### ", "")}</h3>;
                    if (block.startsWith("## ")) return <h2 key={i} className="text-2xl font-extrabold text-primary-dark mt-12 mb-4">{block.replace("## ", "")}</h2>;
                    if (block.startsWith("- ") || block.startsWith("1. ")) {
                      const items = block.split("\n").filter((l) => l.trim());
                      const isOrdered = block.startsWith("1. ");
                      const Tag = isOrdered ? "ol" : "ul";
                      return (
                        <Tag key={i} className={`space-y-2.5 my-5 ${isOrdered ? "list-decimal pl-6" : ""}`}>
                          {items.map((item, j) => (
                            <li key={j} className="text-gray-600 leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: item.replace(/^[-\d]+[.)]\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark font-bold'>$1</strong>") }} />
                            </li>
                          ))}
                        </Tag>
                      );
                    }
                    if (block.startsWith("|")) {
                      const rows = block.split("\n").filter((r) => r.trim() && !r.match(/^\|[-\s|]+\|$/));
                      return (
                        <div key={i} className="overflow-x-auto my-8 rounded-2xl border border-gray-100">
                          <table className="w-full text-sm">
                            <tbody>
                            {rows.map((row, ri) => {
                              const cells = row.split("|").filter((c) => c.trim());
                              const Tag = ri === 0 ? "th" : "td";
                              return (
                                <tr key={ri} className={ri === 0 ? "bg-primary/5" : "border-t border-gray-50"}>
                                  {cells.map((cell, ci) => (
                                    <Tag key={ci} className={`px-5 py-3 text-left ${ri === 0 ? "font-bold text-primary-dark" : "text-gray-600"}`}>{cell.trim()}</Tag>
                                  ))}
                                </tr>
                              );
                            })}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    return <p key={i} className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary-dark font-bold'>$1</strong>") }} />;
                  })}
                </div>
              </ScrollReveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="gradient-mesh rounded-3xl p-6">
                  <h3 className="font-bold text-white text-lg mb-2">Need HVAC Help?</h3>
                  <p className="text-white/50 text-sm mb-5">Our experts are ready to help.</p>
                  <a href="tel:+15083869104" className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-full transition-all mb-2">
                    <Phone className="w-4 h-4" />(508) 386-9104
                  </a>
                  <Link href="#contact" className="flex items-center justify-center gap-2 w-full py-3 glass text-white font-medium text-sm rounded-full hover:bg-white/15 transition-all">
                    Free Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="bg-surface rounded-3xl p-6 border border-gray-100">
                  <h3 className="font-bold text-primary-dark mb-3 text-xs uppercase tracking-wider">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-gray-500 text-xs font-medium rounded-full border border-gray-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 gradient-mesh-light">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-extrabold text-primary-dark text-center mb-10 tracking-tight">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary-dark group-hover:text-primary transition-colors mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, image: post.image, datePublished: post.date,
        author: { "@type": "Organization", name: "Mass HVAC Inc" },
        publisher: { "@type": "Organization", name: "Mass HVAC Inc", logo: { "@type": "ImageObject", url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg" } },
      }) }} />
    </>
  );
}
