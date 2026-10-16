import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "HVAC Tips & Guides for MetroWest Homeowners",
  description: "Plain-English HVAC guides for MetroWest, MA homeowners: furnaces, AC, heat pumps, Mass Save rebates, maintenance and indoor air quality.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdf143b5e9eeb.jpg" alt="" fill sizes="100vw" className="object-cover object-center" priority fetchPriority="high" quality={75} />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />Expert HVAC Insights
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            HVAC <span className="text-accent">Blog</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Plain-English guides for MetroWest homeowners on heating, cooling, rebates and air quality.
          </p>
          <div className="accent-divider mt-8" />
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl overflow-hidden border border-gray-100 card-premium">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/5 text-accent text-xs font-semibold rounded-full">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{featured.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">MH</span></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{featured.author}</p>
                      <p className="text-xs text-gray-600">{new Date(`${featured.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-accent font-bold text-sm">
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
          <h2 className="text-2xl font-bold text-primary mb-10">Latest <span className="text-accent">Articles</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 card-premium">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 bg-accent/5 text-accent text-xs font-semibold rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{post.author}</span>
                      <span>{new Date(`${post.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* CollectionPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "HVAC Blog for MetroWest, MA Homeowners",
        description: "HVAC guides for MetroWest, MA homeowners.",
        url: `${SITE_URL}/blog`,
        publisher: {
          "@type": "Organization",
          name: "Mass HVAC Inc",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: blogPosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}/blog/${post.slug}`,
            name: post.title,
          })),
        },
      }) }} />

      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        ],
      }) }} />

      {/* WebPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "HVAC Blog for MetroWest, MA Homeowners",
        url: `${SITE_URL}/blog`,
        description: "HVAC guides for MetroWest, MA homeowners.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      }) }} />
    </>
  );
}
