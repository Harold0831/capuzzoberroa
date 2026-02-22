import Link from "next/link";
import { Scale } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: Elemento Visual */}
        <div className="relative aspect-square md:aspect-auto md:h-[550px] bg-brand-beige rounded-sm flex items-center justify-center overflow-hidden shadow-xl">
          {/* Fondo sutil y balanza decorativa */}
          <div className="absolute inset-0 bg-brand-green opacity-5"></div>
          <Scale size={140} className="text-brand-gold opacity-60" strokeWidth={1} />
          
          {/* Marco dorado interior tipo "cuadro" para darle un toque premium */}
          <div className="absolute inset-5 border border-brand-gold opacity-40"></div>
        </div>

        {/* Columna Derecha: Texto y Contenido */}
        <div>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-green mb-6 leading-tight">
            La Firma <br/>
            <span className="text-brand-gold italic">Capuzzo & Berroa</span>
          </h2>
          
          {/* Línea separadora decorativa */}
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <div className="font-body text-brand-gray space-y-6 text-lg leading-relaxed">
            <p>
              Somos un despacho legal dedicado a ofrecer soluciones integrales y estratégicas. 
              Nuestro enfoque se basa en la excelencia, la ética profesional y un compromiso 
              inquebrantable con la defensa de los intereses de nuestros clientes.
            </p>
            <p>
              Entendemos que cada caso es único. Por ello, brindamos una atención personalizada, 
              analizando cada detalle para diseñar la mejor ruta jurídica que garantice resultados 
              sólidos y proteja su patrimonio.
            </p>
          </div>

          <div className="mt-12">
            <Link 
              href="/nosotros" 
              className="group inline-flex items-center gap-2 font-body font-semibold text-brand-green hover:text-brand-gold transition-colors text-lg"
            >
              Conozca más sobre nuestra historia
              <span className="transform transition-transform group-hover:translate-x-2 text-brand-gold">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}