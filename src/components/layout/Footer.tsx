import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-brand-offwhite pt-24 pb-10 px-6 relative overflow-hidden">
      {/* Línea dorada superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* Cuadrícula superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Columna 1: Marca */}
          <AnimatedSection className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-8 w-fit group">
              <span className="font-heading text-2xl text-brand-gold tracking-wider leading-none group-hover:text-brand-offwhite transition-colors duration-300">
                CAPUZZO & BERROA
              </span>
              <span className="font-body text-[0.6rem] tracking-[0.35em] text-brand-beige/60 mt-1.5 uppercase">
                Legal Studio
              </span>
            </Link>
            <p className="font-body text-brand-beige/70 text-sm leading-relaxed">
              Firma de abogados comprometida con la excelencia, la ética profesional 
              y la protección del patrimonio de nuestros clientes mediante estrategias 
              jurídicas sólidas.
            </p>
          </AnimatedSection>

          {/* Columna 2: Enlaces Rápidos */}
          <AnimatedSection delay={0.1}>
            <h4 className="font-heading text-lg text-brand-gold mb-8">Explorar</h4>
            <nav className="flex flex-col gap-4 font-body text-brand-beige/70 text-sm">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "La Firma" },
                { href: "/servicios", label: "Áreas de Práctica" },
                { href: "/noticias", label: "Actualidad Legal" },
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-brand-gold transition-colors duration-300 w-fit relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-gold/40 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </AnimatedSection>

          {/* Columna 3: Contacto */}
          <AnimatedSection delay={0.2}>
            <h4 className="font-heading text-lg text-brand-gold mb-8">Contacto</h4>
            <ul className="flex flex-col gap-5 font-body text-brand-beige/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold/70 shrink-0 mt-0.5" />
                <span>Plaza Paseo del Teatro, Avenida Máximo Gómez No. 60, La Esperilla, Local 107<br/>Santo Domingo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold/70 shrink-0" />
                <span>+1 (809) 661-4214</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold/70 shrink-0" />
                <span>info@capuzzoberroa.com</span>
              </li>
            </ul>
          </AnimatedSection>

          {/* Columna 4: Redes Sociales */}
          <AnimatedSection delay={0.3}>
            <h4 className="font-heading text-lg text-brand-gold mb-8">Síganos</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-brand-gold/10 w-11 h-11 flex items-center justify-center text-brand-gold/70 hover:bg-brand-gold hover:text-brand-green transition-all duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/capuzzoyberroa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-brand-gold/10 w-11 h-11 flex items-center justify-center text-brand-gold/70 hover:bg-brand-gold hover:text-brand-green transition-all duration-300" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </AnimatedSection>

        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-brand-gray/60 tracking-wide">
          <p>
            &copy; {currentYear} Capuzzo & Berroa. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-brand-gold transition-colors duration-300">Términos de Uso</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors duration-300">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}