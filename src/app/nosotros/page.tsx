import { Scale, Shield, Award, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "La Firma | Capuzzo & Berroa Legal Studio",
  description: "Conozca nuestra historia, filosofía y el compromiso ético que nos define como su mejor aliado legal.",
};

const pilares = [
  { icon: Scale, title: "Ética Intachable", desc: "Actuamos con absoluta transparencia y lealtad hacia nuestros clientes y la ley." },
  { icon: Award, title: "Excelencia", desc: "Buscamos la perfección en cada escrito, cada negociación y cada litigio." },
  { icon: Shield, title: "Protección", desc: "Su patrimonio y tranquilidad son nuestro principal objetivo a defender." },
  { icon: BookOpen, title: "Actualización", desc: "Estudio constante para ofrecer soluciones innovadoras ante nuevos retos legales." },
];

export default function NosotrosPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      
      {/* Cabecera */}
      <section className="bg-brand-green pt-40 pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-brand-green to-brand-green/95" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="font-body text-sm text-brand-gold/70 tracking-[0.3em] uppercase mb-4 block">
              Sobre Nosotros
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-brand-gold mb-6 tracking-wide">
              Nuestra Historia
            </h1>
            <div className="w-16 h-px bg-brand-gold/50 mx-auto mb-8" />
            <p className="font-body text-xl md:text-2xl text-brand-beige/80 leading-relaxed italic max-w-2xl mx-auto">
              &ldquo;La justicia y la excelencia no son solo ideales, son la base sobre la cual construimos cada caso.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Texto Principal */}
      <section className="py-28 px-6">
        <AnimatedSection className="max-w-4xl mx-auto font-body text-lg text-brand-gray space-y-8 leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-heading first-letter:text-brand-green first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            Capuzzo & Berroa Legal Studio nace con la firme convicción de transformar la práctica legal tradicional. Fundada por profesionales con una trayectoria intachable, nuestra firma se ha consolidado como un referente de excelencia, ética y resultados contundentes.
          </p>
          <p>
            Entendemos que detrás de cada expediente hay patrimonios, empresas, familias y, sobre todo, tranquilidad en juego. Por ello, no ofrecemos respuestas genéricas; diseñamos estrategias jurídicas a la medida, combinando el rigor académico con una visión práctica y resolutiva del derecho.
          </p>
          <p>
            Nuestro equipo está compuesto por especialistas que no solo dominan la técnica jurídica, sino que se mantienen en constante actualización frente a los cambios legislativos y las dinámicas del mercado global. Esto nos permite anticiparnos a los riesgos y proteger los intereses de nuestros clientes desde todos los frentes posibles.
          </p>
        </AnimatedSection>
      </section>

      {/* Valores */}
      <section className="bg-brand-beige/20 py-28 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-20">
            <span className="font-body text-sm text-brand-gold/70 tracking-[0.3em] uppercase mb-4 block">
              Lo Que Nos Define
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-green mb-4">Nuestros Pilares</h2>
            <div className="w-16 h-px bg-brand-gold/50 mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              const num = String(index + 1).padStart(2, "0");
              return (
                <AnimatedSection key={pilar.title} delay={index * 0.1}>
                  <div className="group bg-white rounded-2xl p-8 lg:p-10 border border-brand-gray/8 text-center hover:border-brand-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                    {/* Número sutil de fondo */}
                    <span className="absolute top-3 right-4 font-heading text-5xl text-brand-gray/5 group-hover:text-brand-gold/10 transition-colors duration-500 select-none leading-none">
                      {num}
                    </span>
                    
                    {/* Ícono */}
                    <div className="w-14 h-14 rounded-xl bg-brand-green/5 mx-auto flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-gold group-hover:scale-105 transition-all duration-500">
                      <Icon size={28} strokeWidth={1.4} />
                    </div>

                    <h3 className="font-heading text-xl text-brand-green mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {pilar.title}
                    </h3>
                    <p className="font-body text-sm text-brand-gray/80 leading-relaxed">
                      {pilar.desc}
                    </p>

                    {/* Borde inferior animado */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}