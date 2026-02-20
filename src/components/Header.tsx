"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, Clock, MapPin, Shield, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";

const serviceLinks = [
  { href: "/services/heating-installation-repair", label: "Heating Installation & Repair", icon: Flame, color: "text-orange-500" },
  { href: "/services/air-conditioning-installation-repair", label: "Air Conditioning", icon: Snowflake, color: "text-blue-500" },
  { href: "/services/heat-pumps-ductless-mini-splits", label: "Heat Pumps & Mini-Splits", icon: Wind, color: "text-teal" },
  { href: "/services/hvac-maintenance-tune-ups", label: "Maintenance & Tune-Ups", icon: Wrench, color: "text-gray-500" },
  { href: "/services/indoor-air-quality", label: "Indoor Air Quality", icon: AirVent, color: "text-green-500" },
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
      {/* ── Top Bar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled ? "h-0 opacity-0 pointer-events-none" : "h-10 opacity-100"
        } bg-primary-dark/95 backdrop-blur-sm`}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-between text-xs text-white/80">
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-accent" />Serving All of Massachusetts</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-teal" />Mon–Sat 7AM–8PM</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3 h-3 text-blue-light" />Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide uppercase text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              24/7 Emergency
            </span>
            <a href="tel:+15083869104" className="flex items-center gap-1.5 text-white font-semibold hover:text-accent transition-colors">
              <Phone className="w-3 h-3" />(508) 386-9104
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 glass-light shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "top-10 bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="relative shrink-0 group">
            <Image
              src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg"
              alt="Mass HVAC Inc"
              width={160}
              height={50}
              className={`h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`group flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
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
                    <div className="glass-light rounded-2xl shadow-2xl p-2 min-w-[340px]">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors group/item"
                        >
                          <div className={`w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:scale-110 transition-transform ${s.color}`}>
                            <s.icon className="w-[18px] h-[18px]" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-primary transition-colors">
                            {s.label}
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link href="/services" className="flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-semibold text-accent hover:bg-accent/5 rounded-xl transition-colors">
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
              className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 glow-accent animate-pulse-glow"
            >
              <Phone className="w-4 h-4" />(508) 386-9104
            </a>
            <Link
              href="#contact"
              className={`px-5 py-2.5 font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? "bg-primary hover:bg-primary-light text-white"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary"
              }`}
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl" aria-label="Toggle menu">
            {mobileOpen
              ? <X className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
              : <Menu className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[56] w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg" alt="Mass HVAC" width={130} height={40} className="h-9 w-auto" />
            <button type="button" onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-gray-100" aria-label="Close menu"><X className="w-5 h-5 text-gray-500" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-primary/5 hover:text-primary font-medium transition-colors">
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 space-y-0.5">
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-primary hover:bg-primary/5 transition-colors">
                        <s.icon className={`w-4 h-4 ${s.color}`} />{s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 space-y-3">
            <a href="tel:+15083869104" className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-colors">
              <Phone className="w-4 h-4" />Call (508) 386-9104
            </a>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
