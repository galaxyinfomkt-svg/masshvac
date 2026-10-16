import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import type { Metadata } from "next";
import { PHONE_DISPLAY, TEL_HREF, SITE_URL, BRAND } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";

const stripBrand = (t: string) => t.replace(/\s*[|–-]\s*Mass HVAC.*$/i, "");
const fmtDate = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export function generateStaticParams() { return blogPosts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: stripBrand(post.metaTitle),
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.title,
    type: "article",
    publishedTime: post.date,
  });
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
        <Image src={post.image} alt="" fill sizes="100vw" quality={75} className="object-cover object-center" priority fetchPriority="high" />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <Link href="/blog" className="inline-flex items-center gap-1.5 py-2 text-white/85 hover:text-white text-sm mb-4 transition-colors">
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
              <time dateTime={post.date} className="text-white/80 text-sm">{fmtDate(post.date)}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3">
              {/* No ScrollReveal here: the article text is the LCP element, and the
                  reveal animation (opacity 0 until hydration + 0.8s) pushed LCP to ~4s. */}
              <div className="md-content text-lg">{renderMarkdown(post.content)}</div>
              <div className="mt-10 p-6 rounded-xl bg-surface border border-gray-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p className="font-semibold text-primary">Have a question about your system? Talk to a Mass HVAC technician.</p>
                <div className="flex gap-3 shrink-0">
                  <a href={TEL_HREF} className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white font-bold text-sm rounded-lg"><Phone className="w-4 h-4" aria-hidden="true" />{PHONE_DISPLAY}</a>
                  <a href="#quote" className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-primary font-bold text-sm rounded-lg">Free estimate</a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-black rounded-xl p-6 border border-white/10">
                  <h2 className="font-bold text-white text-lg mb-2">Need HVAC Help?</h2>
                  <p className="text-white/80 text-sm mb-5">Call or request a free estimate.</p>
                  <a href={TEL_HREF} className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-dark text-white font-bold text-sm rounded-lg transition-all mb-2">
                    <Phone className="w-4 h-4" aria-hidden="true" />{PHONE_DISPLAY}
                  </a>
                  <a href="#quote" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-white text-white font-medium text-sm rounded-lg hover:bg-white hover:text-black transition-all">
                    Free Estimate <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
                <div className="bg-surface rounded-xl p-6">
                  <h2 className="font-bold text-primary mb-3 text-xs uppercase tracking-wider">Topics</h2>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-full border border-gray-100">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-surface rounded-xl p-6">
                  <h2 className="font-bold text-primary mb-3 text-xs uppercase tracking-wider">Our Services</h2>
                  <div className="space-y-2">
                    {[
                      { name: "Heating", href: "/services/heating-installation-repair" },
                      { name: "Air Conditioning", href: "/services/air-conditioning-installation-repair" },
                      { name: "Mini-Splits", href: "/services/heat-pumps-ductless-mini-splits" },
                      { name: "Maintenance", href: "/services/hvac-maintenance-tune-ups" },
                      { name: "Air Quality", href: "/services/indoor-air-quality" },
                    ].map((s) => (
                      <Link key={s.href} href={s.href} className="block py-1 text-sm text-gray-700 hover:text-accent transition-colors">
                        {s.name} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                  <Image src={p.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* BlogPosting JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
        // "Mass HVAC Team" is not a person: attribute authorship to the business.
        author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: BRAND, url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
        keywords: post.tags.join(", "),
        articleSection: "HVAC",
        inLanguage: "en-US",
        wordCount: post.content.split(/\s+/).length,
      }) }} />

      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      }) }} />
    </>
  );
}
