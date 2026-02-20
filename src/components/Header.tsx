"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";

const serviceLinks = [
  { href: "/services/heating-installation-repair", label: "Heating Installation & Repair", icon: Flame },
  { href: "/services/air-conditioning-installation-repair", label: "Air Conditioning", icon: Snowflake },
  { href: "/services/heat-pumps-ductless-mini-splits", label: "Heat Pumps & Mini-Splits", icon: Wind },
  { href: "/services/hvac-maintenance-tune-ups", label: "Maintenance & Tune-Ups", icon: Wrench },
  { href: "/services/indoor-air-quality", label: "Indoor Air Quality", icon: AirVent },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Main Header — Always black like RS Development ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
          scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="relative shrink-0">
            <Image
              src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg"
              alt="Mass HVAC Inc"
              width={160}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-2 min-w-[320px]">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface transition-colors group/item"
                        >
                          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <s.icon className="w-[18px] h-[18px] text-black" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-gold-dark transition-colors">
                            {s.label}
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link href="/services" className="flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-bold text-gold hover:bg-gold/5 rounded-lg transition-colors">
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+15083869104"
              className="flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold-dark text-black font-bold text-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />(508) 386-9104
            </a>
            <Link
              href="#contact"
              className="px-6 py-2.5 border-2 border-white text-white font-bold text-sm rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {mobileOpen
              ? <X className="w-6 h-6 text-white" />
              : <Menu className="w-6 h-6 text-white" />}
          </button>
        </nav>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-[55] bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[56] w-[85%] max-w-sm bg-dark-900 shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg" alt="Mass HVAC" width={130} height={40} className="h-9 w-auto brightness-0 invert" />
            <button type="button" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-white/10" aria-label="Close menu"><X className="w-5 h-5 text-white" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-white/80 hover:text-gold hover:bg-white/5 font-medium transition-colors">
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 space-y-0.5">
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/50 hover:text-gold hover:bg-white/5 transition-colors">
                        <s.icon className="w-4 h-4 text-gold" />{s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/10 space-y-3">
            <a href="tel:+15083869104" className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold text-black font-bold rounded-lg transition-colors hover:bg-gold-dark">
              <Phone className="w-4 h-4" />Call (508) 386-9104
            </a>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full py-3.5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
