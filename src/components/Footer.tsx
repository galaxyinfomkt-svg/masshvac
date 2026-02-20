import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, ArrowRight, Star, Shield, ExternalLink } from "lucide-react";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const popularCities = [
  "Milford", "Framingham", "Natick", "Worcester", "Newton",
  "Brookline", "Cambridge", "Wellesley", "Marlborough", "Hudson",
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* ── Pre-footer CTA ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
          <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Ready for <span className="text-gradient">Perfect Comfort?</span>
              </h3>
              <p className="text-white/60 text-lg">Fast, reliable HVAC service across Massachusetts</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+15083869104"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent"
              >
                <Phone className="w-5 h-5" />
                (508) 386-9104
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] border border-white/10"
              >
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <Image
                src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg"
                alt="Mass HVAC Inc"
                width={160}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert mb-5"
              />
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Professional heating, cooling, and indoor air quality services for homes and
                businesses across Massachusetts.
              </p>
              <div className="space-y-3 text-sm">
                <a href="tel:+15083869104" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                  </div>
                  (508) 386-9104
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-blue-light" />
                  </div>
                  Milford, MA
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-teal" />
                  </div>
                  Mon–Sat 7AM–8PM
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  24/7 Emergency Available
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {service.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links + Cities */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Popular Areas</h4>
              <div className="flex flex-wrap gap-2">
                {popularCities.map((city) => (
                  <Link
                    key={city}
                    href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3 py-1 text-xs text-white/40 bg-white/5 rounded-full hover:bg-white/10 hover:text-white/80 transition-colors"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>

            {/* Reviews & Hours */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Reviews</h4>
              <div className="glass rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm font-medium mb-1">5.0 Star Rating</p>
                <p className="text-white/40 text-xs mb-4">Based on Google Reviews</p>
                <a
                  href="https://g.page/r/CSf92YebNYJPEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent-light hover:text-accent font-semibold transition-colors"
                >
                  Leave a Review <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/60 text-xs">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Licensed &amp; Insured in Massachusetts</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} Mass HVAC Inc. All rights reserved.</p>
            <p>Designed for peak performance &amp; comfort.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
