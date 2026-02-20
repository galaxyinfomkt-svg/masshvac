import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, Star, ExternalLink } from "lucide-react";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact Us" },
];

const popularCities = [
  "Milford", "Framingham", "Natick", "Worcester", "Newton",
  "Brookline", "Cambridge", "Wellesley", "Marlborough", "Hudson",
  "Westborough", "Shrewsbury", "Hopkinton", "Sudbury", "Concord",
];

export default function Footer() {
  return (
    <footer>
      {/* Accent CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-accent via-accent to-accent-dark relative overflow-hidden noise-texture">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Start Your HVAC Project?</h2>
              <p className="text-white/80">Expert heating, cooling, and air quality solutions across Massachusetts.</p>
            </div>
            <a href="tel:+15083869104" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 hover:scale-105 shrink-0">
              <Phone className="w-5 h-5" />(508) 386-9104
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="inline-block bg-white rounded-xl p-3 mb-5 mx-auto md:mx-0 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg" alt="Mass HVAC Inc" width={160} height={50} className="h-10 w-auto object-contain" style={{ mixBlendMode: "multiply" }} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">Licensed HVAC contractor serving 100+ cities across Massachusetts. Professional heating, cooling, and indoor air quality services for homes and businesses.</p>
              <p className="text-gray-500 text-xs">MA License #12345 | Fully Insured</p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-accent">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="hover:text-accent transition-colors">{service.shortName}</Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 mt-6 text-accent">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {quickLinks.map((link) => (
                  <li key={link.href}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-accent">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href="tel:+15083869104" className="flex items-center gap-3 justify-center md:justify-start hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-500">Phone</p><p className="font-bold text-white">(508) 386-9104</p></div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-500">Location</p><p className="text-sm">Milford, MA</p></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><Clock className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-500">Hours</p><p className="text-sm">Mon-Sat 7AM-8PM</p></div>
                  </div>
                </li>
                <li>
                  <a href="mailto:info@masshvac.net" className="flex items-center gap-3 justify-center md:justify-start hover:text-accent transition-colors">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-500">Email</p><p className="text-sm">info@masshvac.net</p></div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-accent">Google Reviews</h4>
              <a href="https://g.page/r/CSf92YebNYJPEAE/review" target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-1 text-accent mb-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-current" />))}
                  <span className="font-bold text-white ml-2">5.0</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">Based on Google Reviews</p>
                <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:text-accent-light transition-colors">Leave a Review <ExternalLink className="w-3 h-3" /></span>
              </a>

              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 mt-6 text-accent">Popular Areas</h4>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                {popularCities.map((city) => (
                  <Link key={city} href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`} className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 rounded border border-white/5 hover:border-accent/30 hover:bg-accent/20 hover:text-accent transition-colors">{city}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Mass HVAC Inc. All rights reserved.</p>
            <p>Licensed & Insured HVAC Contractor — Serving All of Massachusetts</p>
          </div>
          <div className="border-t border-white/5 py-4">
            <p className="text-center text-sm text-gray-400">
              Developed by{" "}
              <a href="https://galaxyinfo.us" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors font-semibold">
                Galaxy IT Mkt
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
