import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-brand-green text-brand-offwhite py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Elemento decorativo a */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        <h1 className="font-heading text-4xl md:text-6xl text-brand-gold mb-6 leading-tight tracking-wide">
          Excelencia y Compromiso <br className="hidden md:block" /> en Cada Caso Legal
        </h1>
        
        <p className="font-body text-lg md:text-xl text-brand-beige max-w-2xl mb-10 leading-relaxed">
          Protegemos su patrimonio y tranquilidad con estrategias jurídicas sólidas, 
          brindando asesoría legal personalizada y de alto nivel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/servicios" 
            className="bg-brand-gold text-brand-green font-body font-semibold px-8 py-3 rounded hover:bg-opacity-90 transition-all text-center"
          >
            Nuestros Servicios
          </Link>
          <Link 
            href="/contacto" 
            className="border-2 border-brand-gold text-brand-gold font-body font-semibold px-8 py-3 rounded hover:bg-brand-gold hover:text-brand-green transition-all text-center"
          >
            Agendar Consulta
          </Link>
        </div>

      </div>
    </section>
  );
}