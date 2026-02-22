import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-brand-offwhite pt-20 pb-10 px-6 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Cuadrícula superior del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col block mb-6 w-fit">
              <span className="font-heading text-2xl text-brand-gold tracking-wider leading-none">
                CAPUZZO & BERROA
              </span>
              <span className="font-body text-[0.65rem] tracking-[0.3em] text-brand-beige mt-1">
                LEGAL STUDIO
              </span>
            </Link>
            <p className="font-body text-brand-beige text-sm leading-relaxed">
              Firma de abogados comprometida con la excelencia, la ética profesional 
              y la protección del patrimonio de nuestros clientes mediante estrategias 
              jurídicas sólidas.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-heading text-xl text-brand-gold mb-6">Explorar</h4>
            <nav className="flex flex-col gap-3 font-body text-brand-beige">
              <Link href="/" className="hover:text-brand-gold transition-colors w-fit">Inicio</Link>
              <Link href="/nosotros" className="hover:text-brand-gold transition-colors w-fit">La Firma</Link>
              <Link href="/servicios" className="hover:text-brand-gold transition-colors w-fit">Áreas de Práctica</Link>
              <Link href="/noticias" className="hover:text-brand-gold transition-colors w-fit">Actualidad Legal</Link>
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="font-heading text-xl text-brand-gold mb-6">Contacto</h4>
            <ul className="flex flex-col gap-4 font-body text-brand-beige text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Av. Principal 123, Edificio Legal, Piso 4.<br/>Santo Domingo, D.N.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+1 (809) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>info@capuzzoberroa.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="font-heading text-xl text-brand-gold mb-6">Síganos</h4>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <div className="border-t border-brand-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-brand-gray">
          <p>
            &copy; {currentYear} Capuzzo & Berroa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-gold transition-colors">Términos de Uso</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}