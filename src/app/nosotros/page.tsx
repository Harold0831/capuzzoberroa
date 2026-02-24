import { Scale, Shield, Award, BookOpen } from "lucide-react";
import Image from "next/image"; // <-- Importamos Image
import type { Metadata } from "next";

// Metadatos para el SEO de esta página específica
export const metadata: Metadata = {
  title: "La Firma | Capuzzo & Berroa Legal Studio",
  description: "Conozca nuestra historia, filosofía y el compromiso ético que nos define como su mejor aliado legal.",
};

export default function NosotrosPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      
      {/* Cabecera de la Página */}
      <section className="bg-brand-green pt-40 pb-24 px-6 border-b border-brand-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-brand-gold mb-6 tracking-wide">
            Nuestra Historia
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 opacity-70"></div>
          <p className="font-body text-xl md:text-2xl text-brand-beige leading-relaxed italic">
            "La justicia y la excelencia no son solo ideales, son la base sobre la cual construimos cada caso."
          </p>
        </div>
      </section>

      {/* Sección de Texto Principal */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto font-body text-lg text-brand-gray space-y-8 leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-heading first-letter:text-brand-green first-letter:mr-3 first-letter:float-left">
            Capuzzo & Berroa Legal Studio nace con la firme convicción de transformar la práctica legal tradicional. Fundada por profesionales con una trayectoria intachable, nuestra firma se ha consolidado como un referente de excelencia, ética y resultados contundentes.
          </p>
          <p>
            Entendemos que detrás de cada expediente hay patrimonios, empresas, familias y, sobre todo, tranquilidad en juego. Por ello, no ofrecemos respuestas genéricas; diseñamos estrategias jurídicas a la medida, combinando el rigor académico con una visión práctica y resolutiva del derecho.
          </p>
          <p>
            Nuestro equipo está compuesto por especialistas que no solo dominan la técnica jurídica, sino que se mantienen en constante actualización frente a los cambios legislativos y las dinámicas del mercado global. Esto nos permite anticiparnos a los riesgos y proteger los intereses de nuestros clientes desde todos los frentes posibles.
          </p>
        </div>
      </section>

      {/* Sección de Valores (Cuadrícula) */}
      <section className="bg-brand-beige/30 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-brand-green mb-4">Nuestros Pilares</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Valor 1 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-green text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-gold transition-colors">
                <Scale size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl text-brand-green mb-3">Ética Intachable</h3>
              <p className="font-body text-sm text-brand-gray">
                Actuamos con absoluta transparencia y lealtad hacia nuestros clientes y la ley.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-green text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-gold transition-colors">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl text-brand-green mb-3">Excelencia</h3>
              <p className="font-body text-sm text-brand-gray">
                Buscamos la perfección en cada escrito, cada negociación y cada litigio.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-green text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-gold transition-colors">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl text-brand-green mb-3">Protección</h3>
              <p className="font-body text-sm text-brand-gray">
                Su patrimonio y tranquilidad son nuestro principal objetivo a defender.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-green text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-brand-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-gold transition-colors">
                <BookOpen size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl text-brand-green mb-3">Actualización</h3>
              <p className="font-body text-sm text-brand-gray">
                Estudio constante para ofrecer soluciones innovadoras ante nuevos retos legales.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}