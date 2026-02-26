"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Formulario simulado enviado con éxito!");
  };

  return (
    <section className="bg-brand-green py-28 md:py-36 px-6 relative overflow-hidden" id="contacto">
      {/* Detalles decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        
        {/* Columna Izquierda: Información */}
        <div className="text-brand-offwhite">
          <AnimatedSection direction="left">
            <span className="font-body text-sm text-brand-gold/70 tracking-[0.3em] uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-gold mb-6 leading-[1.1]">
              Agende su Consulta
            </h2>
            <div className="w-16 h-px bg-brand-gold/50 mb-8" />
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.1}>
            <p className="font-body text-brand-beige/90 text-lg mb-14 leading-relaxed">
              Estamos listos para escuchar su caso y brindarle la asesoría legal 
              estratégica que necesita. Contáctenos hoy mismo para programar 
              una evaluación confidencial.
            </p>
          </AnimatedSection>

          <div className="space-y-8 font-body text-lg">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="group flex items-start gap-5 p-4 -ml-4 hover:bg-brand-gold/5 transition-colors duration-300 rounded-sm">
                <div className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all duration-300 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gold mb-1">Nuestra Oficina</h3>
                  <p className="text-brand-beige/80 text-base">Plaza Paseo del Teatro, Avenida Máximo Gómez <br/> No. 60, La Esperilla, Local 107<br/>Santo Domingo, República Dominicana</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.3}>
              <div className="group flex items-center gap-5 p-4 -ml-4 hover:bg-brand-gold/5 transition-colors duration-300 rounded-sm">
                <div className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all duration-300 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gold mb-1">Teléfono</h3>
                  <p className="text-brand-beige/80 text-base">+1 (809) 661-4214</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.4}>
              <div className="group flex items-center gap-5 p-4 -ml-4 hover:bg-brand-gold/5 transition-colors duration-300 rounded-sm">
                <div className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-all duration-300 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gold mb-1">Correo Electrónico</h3>
                  <p className="text-brand-beige/80 text-base">info@capuzzoberroa.com</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="bg-brand-offwhite p-8 md:p-12 relative overflow-hidden">
            {/* Detalle de esquina */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-brand-gold/30" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-brand-gold/30" />

            <h3 className="font-heading text-3xl text-brand-green mb-2">
              Envíenos un Mensaje
            </h3>
            <div className="w-12 h-px bg-brand-gold/50 mb-8" />
            
            <form onSubmit={handleSubmit} className="space-y-6 font-body">
              <div>
                <label htmlFor="nombre" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Nombre Completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green"
                  required 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Mensaje o Caso</label>
                <textarea 
                  id="mensaje" 
                  rows={4} 
                  className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green resize-none"
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="group relative w-full bg-brand-gold text-brand-green font-bold text-base py-4 overflow-hidden uppercase tracking-widest transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500">
                  Enviar Mensaje
                </span>
                <span className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}