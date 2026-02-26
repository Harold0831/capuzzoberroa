"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  return (
    <section className="bg-brand-offwhite py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Detalle decorativo de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Columna Izquierda: Elemento Visual */}
        <AnimatedSection direction="left">
          <div className="relative aspect-square md:aspect-auto md:h-145 bg-brand-beige/40 overflow-hidden group">
            <Image
              src="/home/about-image3.jpg"
              alt="Capuzzo & Berroa Legal Studio"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Marco dorado interior premium */}
            <div className="absolute inset-6 border border-brand-gold/30 z-10 pointer-events-none" />
            
            {/* Detalle de esquina */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-gold/60 z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-gold/60 z-10 pointer-events-none" />
          </div>
        </AnimatedSection>

        {/* Columna Derecha: Texto y Contenido */}
        <div>
          <AnimatedSection delay={0.1}>
            <span className="font-body text-sm text-brand-gold/80 tracking-[0.3em] uppercase mb-4 block">
              Sobre Nosotros
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-green mb-6 leading-[1.1]">
              La Firma <br/>
              <span className="text-brand-gold">Capuzzo & Berroa</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="w-16 h-px bg-brand-gold/60 mb-8" />
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
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
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="mt-12">
              <Link 
                href="/nosotros" 
                className="group inline-flex items-center gap-3 font-body font-semibold text-brand-green text-lg relative"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 group-hover:after:w-full">
                  Conozca más sobre nuestra historia
                </span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-2 text-brand-gold">
                  &rarr;
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}