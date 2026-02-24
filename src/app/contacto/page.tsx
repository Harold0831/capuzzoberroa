import ContactSection from "@/components/home/ContactSection";
import type { Metadata } from "next";

// Optimizamos el SEO para que las personas encuentren cómo comunicarse
export const metadata: Metadata = {
  title: "Contacto | Capuzzo & Berroa Legal Studio",
  description: "Comuníquese con nuestra firma de abogados en Santo Domingo. Agende su consulta legal confidencial hoy mismo.",
};

export default function ContactoPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      
      {/* Cabecera limpia y directa */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-brand-green mb-6 tracking-wide">
            Estamos a su disposición
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="font-body text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Su tranquilidad legal comienza con una conversación. 
            Déjenos sus datos y uno de nuestros especialistas se pondrá 
            en contacto con usted a la mayor brevedad.
          </p>
        </div>
      </section>

      {/* ¡La magia de los componentes de React! Reutilizamos el formulario */}
      <ContactSection />

    </div>
  );
}