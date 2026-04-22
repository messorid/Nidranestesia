"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const serviceLinks = [
  {
    href: "/servicios/valoracion",
    number: "01",
    title: "Valoración Anestésica Preoperatoria",
    short: "Evaluación antes de su cirugía",
  },
  {
    href: "/servicios/sedacion",
    number: "02",
    title: "Sedación Fuera de Quirófano",
    short: "Para estudios y procedimientos",
  },
  {
    href: "/servicios/analgesia",
    number: "03",
    title: "Analgesia Postoperatoria",
    short: "Control del dolor tras la cirugía",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030C18]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-11 h-11">
              <Image src="/assets/nidra-icon.png" alt="Nidra" fill className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold tracking-[0.25em] text-white">NIDRA</span>
              <span className="text-[9px] tracking-[0.12em] text-blue-400/80 uppercase mt-0.5">Servicios Anestésicos</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className="text-[11px] font-medium tracking-[0.18em] text-slate-400 hover:text-white uppercase transition-colors duration-200">
              Inicio
            </a>

            {/* Servicios dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${servicesOpen ? "text-white" : "text-slate-400 hover:text-white"}`}
              >
                Servicios
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
                  style={{ background: "linear-gradient(160deg, rgba(7,20,36,0.98) 0%, rgba(3,12,24,0.98) 100%)", backdropFilter: "blur(20px)" }}
                >
                  {/* Ver todos */}
                  <a
                    href="/servicios"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 border-b border-white/8 hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-[10px] tracking-[0.2em] uppercase text-blue-400 font-medium">Ver todos los servicios</span>
                    <svg className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* Individual services */}
                  <div className="py-2">
                    {serviceLinks.map(({ href, number, title, short }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-4 px-5 py-3.5 hover:bg-white/5 transition-colors group"
                      >
                        <span className="font-display text-blue-400/30 group-hover:text-blue-400/60 text-sm font-medium mt-0.5 transition-colors flex-shrink-0">
                          {number}
                        </span>
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-white/80 group-hover:text-white text-xs font-medium leading-snug transition-colors">
                            {title}
                          </span>
                          <span className="text-slate-500 text-[10px] leading-snug">{short}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/nosotros" className="text-[11px] font-medium tracking-[0.18em] text-slate-400 hover:text-white uppercase transition-colors duration-200">
              Nosotros
            </a>
            <a href="/contacto" className="text-[11px] font-medium tracking-[0.18em] text-slate-400 hover:text-white uppercase transition-colors duration-200">
              Contacto
            </a>
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Quisiera recibir información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-lg transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/5"
          style={{ background: "rgba(7,20,36,0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">

            <a href="/" onClick={() => setMenuOpen(false)} className="text-sm tracking-wider uppercase text-slate-300 hover:text-white py-3.5 border-b border-white/5 transition-colors">
              Inicio
            </a>

            {/* Mobile Servicios accordion */}
            <div className="border-b border-white/5">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-sm tracking-wider uppercase text-slate-300 hover:text-white py-3.5 transition-colors"
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col pb-3 pl-3 gap-1">
                  <a
                    href="/servicios"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-blue-400 py-2.5 hover:text-blue-300 transition-colors"
                  >
                    <span className="w-4 h-px bg-blue-400/40" />
                    Ver todos
                  </a>
                  {serviceLinks.map(({ href, number, title }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-start gap-3 py-2.5 hover:text-white transition-colors group"
                    >
                      <span className="font-display text-blue-400/40 text-xs mt-0.5 flex-shrink-0">{number}</span>
                      <span className="text-slate-400 group-hover:text-white text-xs leading-snug">{title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/nosotros" onClick={() => setMenuOpen(false)} className="text-sm tracking-wider uppercase text-slate-300 hover:text-white py-3.5 border-b border-white/5 transition-colors">
              Nosotros
            </a>
            <a href="/contacto" onClick={() => setMenuOpen(false)} className="text-sm tracking-wider uppercase text-slate-300 hover:text-white py-3.5 border-b border-white/5 transition-colors">
              Contacto
            </a>

            <a
              href={`https://wa.me/584245567249?text=${encodeURIComponent("Hola, los contacto desde la página web nidranestesia.com. Quisiera recibir información.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full mt-4"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
