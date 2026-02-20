import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, ArrowRight, Star, ExternalLink } from "lucide-react";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Gold CTA Banner (like RS Development) ── */}
      <section className="py-12 bg-gold">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Ready to Start Your HVAC Project?
              </h2>
              <p className="text-black/70">Expert heating, cooling, and air quality solutions across Massachusetts.</p>
            </div>
            <a
              href="tel:+15083869104"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 hover:scale-105 shrink-0"
            >
              <Phone className="w-5 h-5" />(508) 386-9104
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Footer — Pure black like RS Development ── */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-8">
            {/* Logo Column */}
            <div className="text-center md:text-left">
              <Image
                src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg"
                alt="Mass HVAC Inc"
                width={160}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert mb-5 mx-auto md:mx-0"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Licensed HVAC contractor serving over 100 cities across Massachusetts. Professional heating, cooling, and indoor air quality services.
              </p>
            </div>

            {/* Services Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4 text-gold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {services.map((service, i) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`hover:text-gold transition-colors ${i === 0 ? "text-gold font-semibold" : ""}`}
                    >
                      {service.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-gold transition-colors py-1">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4 text-gold">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="tel:+15083869104" className="flex items-center gap-3 justify-center md:justify-start hover:text-gold transition-colors">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="font-bold text-white">(508) 386-9104</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm">Milford, MA</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Hours</p>
                      <p className="text-sm">Mon–Sat 7AM–8PM</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Emergency</p>
                      <p className="text-sm">24/7 Available</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Reviews Column */}
            <div className="text-center md:text-left">
              <h4 className="font-bold mb-4 text-gold">Google Reviews</h4>
              <a
                href="https://g.page/r/CSf92YebNYJPEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-1 text-gold mb-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="font-bold text-white ml-2">5.0</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Based on Google Reviews</p>
                <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                  Leave a Review <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Mass HVAC Inc. All rights reserved.</p>
            <p>Licensed & Insured HVAC Contractor — Massachusetts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
