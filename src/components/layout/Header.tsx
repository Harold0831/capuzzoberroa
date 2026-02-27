"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const lightBgRoutes = ["/contacto"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isLightBg = lightBgRoutes.some((r) => pathname.startsWith(r));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useDarkText = isLightBg && !scrolled;

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-green/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src={useDarkText && !mobileOpen ? "/logo.png" : "/logo-header.png"}
              alt="Capuzzo & Berroa"
              width={scrolled ? 140 : 160}
              height={scrolled ? 45 : 50}
              className="transition-all duration-500"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full ${
                    useDarkText
                      ? "text-brand-green/80 hover:text-brand-gold after:bg-brand-gold"
                      : "text-brand-offwhite/80 hover:text-brand-gold after:bg-brand-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menú"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.25 bg-brand-gold" : useDarkText ? "bg-brand-green" : "bg-brand-gold"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "opacity-0 bg-brand-gold" : useDarkText ? "bg-brand-green" : "bg-brand-gold"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.25 bg-brand-gold" : useDarkText ? "bg-brand-green" : "bg-brand-gold"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[999] bg-[#2B382E] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Botón cerrar dentro del overlay */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Cerrar menú"
        >
          <span className="block w-6 h-[1.5px] bg-brand-gold rotate-45 translate-y-1.25 transition-all duration-300" />
          <span className="block w-6 h-[1.5px] bg-brand-gold opacity-0 transition-all duration-300" />
          <span className="block w-6 h-[1.5px] bg-brand-gold -rotate-45 -translate-y-1.25 transition-all duration-300" />
        </button>

        {/* Logo dentro del overlay */}
        <Image
          src="/logo-header.png"
          alt="Capuzzo & Berroa"
          width={140}
          height={45}
          className="absolute top-5 left-6"
        />

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-3xl text-brand-gold tracking-wider hover:text-brand-offwhite transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}