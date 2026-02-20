"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-brand-green text-brand-offwhite sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl text-brand-gold tracking-wider z-50">
          CAPUZZO & BERROA
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 font-body font-medium tracking-wide items-center">
          <Link href="/" className="hover:text-brand-gold transition-colors">Inicio</Link>
          <Link href="/nosotros" className="hover:text-brand-gold transition-colors">Firma</Link>
          <Link href="/servicios" className="hover:text-brand-gold transition-colors">Servicios</Link>
          <Link href="/noticias" className="hover:text-brand-gold transition-colors">Noticias</Link>
          <Link 
            href="/contacto" 
            className="bg-brand-gold text-brand-green px-5 py-2 rounded hover:bg-opacity-90 transition-all font-semibold ml-4"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón de Menú Móvil (Oculto en Desktop) */}
        <button 
          className="md:hidden text-brand-gold z-50 p-2"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Pantalla Completa del Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-brand-green flex flex-col items-center justify-center gap-8 font-body text-xl z-40">
          {/* Al hacer clic en un enlace, cerramos el menú */}
          <Link href="/" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Inicio</Link>
          <Link href="/nosotros" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Firma</Link>
          <Link href="/servicios" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Servicios</Link>
          <Link href="/noticias" onClick={toggleMenu} className="hover:text-brand-gold transition-colors">Noticias</Link>
          <Link 
            href="/contacto" 
            onClick={toggleMenu}
            className="bg-brand-gold text-brand-green px-8 py-3 rounded hover:bg-opacity-90 transition-all font-semibold mt-4"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}