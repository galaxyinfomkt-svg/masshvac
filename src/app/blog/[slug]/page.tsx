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
    alternates: { canonical: `https://masshvac.net/blog/${post.slug}` },
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
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center"><span className="text-white text-sm font-bold">MH</span></div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <time dateTime={post.date} className="text-white/40 text-sm">{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  {post.content.split("\n\n").map((block, i) => {
                    if (block.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-primary mt-10 mb-3">{block.replace("### ", "")}</h3>;
                    if (block.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-primary mt-12 mb-4">{block.replace("## ", "")}</h2>;
                    if (block.startsWith("- ") || block.startsWith("1. ")) {
                      const items = block.split("\n").filter((l) => l.trim());
                      const isOrdered = block.startsWith("1. ");
                      const Tag = isOrdered ? "ol" : "ul";
                      return (
                        <Tag key={i} className={`space-y-2.5 my-5 ${isOrdered ? "list-decimal pl-6" : ""}`}>
                          {items.map((item, j) => (
                            <li key={j} className="text-gray-600 leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: item.replace(/^[-\d]+[.)]\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary font-bold'>$1</strong>") }} />
                            </li>
                          ))}
                        </Tag>
                      );
                    }
                    if (block.startsWith("|")) {
                      const rows = block.split("\n").filter((r) => r.trim() && !r.match(/^\|[-\s|]+\|$/));
                      return (
                        <div key={i} className="overflow-x-auto my-8 rounded-xl border border-gray-100">
                          <table className="w-full text-sm">
                            <tbody>
                            {rows.map((row, ri) => {
                              const cells = row.split("|").filter((c) => c.trim());
                              const CellTag = ri === 0 ? "th" : "td";
                              return (
                                <tr key={ri} className={ri === 0 ? "bg-accent/5" : "border-t border-gray-50"}>
                                  {cells.map((cell, ci) => (
                                    <CellTag key={ci} className={`px-5 py-3 text-left ${ri === 0 ? "font-bold text-primary" : "text-gray-600"}`}>{cell.trim()}</CellTag>
                                  ))}
                                </tr>
                              );
                            })}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    return <p key={i} className="text-gray-600 leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-primary font-bold'>$1</strong>") }} />;
                  })}
                </div>
              </ScrollReveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-black rounded-xl p-6 border border-white/10">
                  <h3 className="font-bold text-accent text-lg mb-2">Need HVAC Help?</h3>
                  <p className="text-white/50 text-sm mb-5">Our experts are ready to help.</p>
                  <a href="tel:+15087404113" className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-lg transition-all mb-2">
                    <Phone className="w-4 h-4" />(508) 740-4113
                  </a>
                  <Link href="#contact" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-white text-white font-medium text-sm rounded-lg hover:bg-white hover:text-black transition-all">
                    Free Estimate <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="bg-surface rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-3 text-xs uppercase tracking-wider">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-gray-500 text-xs font-medium rounded-full border border-gray-100">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-surface rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-3 text-xs uppercase tracking-wider">Our Services</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Heating", href: "/services/heating-installation-repair" },
                      { name: "Air Conditioning", href: "/services/air-conditioning-installation-repair" },
                      { name: "Mini-Splits", href: "/services/heat-pumps-ductless-mini-splits" },
                      { name: "Maintenance", href: "/services/hvac-maintenance-tune-ups" },
                      { name: "Air Quality", href: "/services/indoor-air-quality" },
                    ].map((s) => (
                      <Link key={s.href} href={s.href} className="block text-sm text-gray-600 hover:text-accent transition-colors">
                        {s.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">More <span className="text-accent">Articles</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 card-premium">
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      {/* BlogPosting JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://masshvac.net/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: post.author,
          url: "https://masshvac.net",
        },
        publisher: {
          "@type": "Organization",
          name: "Mass HVAC Inc",
          url: "https://masshvac.net",
          logo: {
            "@type": "ImageObject",
            url: "https://masshvac.net/logo.png",
          },
        },
        keywords: post.tags.join(", "),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "article p"],
        },
        articleSection: "HVAC",
        inLanguage: "en-US",
        wordCount: post.content.split(/\s+/).length,
      }) }} />

      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://masshvac.net/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://masshvac.net/blog/${post.slug}` },
        ],
      }) }} />

      {/* WebPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: post.title,
        url: `https://masshvac.net/blog/${post.slug}`,
        description: post.metaDescription,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "article p"],
        },
        isPartOf: { "@id": "https://masshvac.net/#website" },
        about: { "@id": "https://masshvac.net/#organization" },
        lastReviewed: post.date,
      }) }} />
    </>
  );
}
