"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    // 1. Aquí pegas la llave de Web3Forms
    formData.append("access_key", "ff197ce9-beff-4fbf-a5e5-87892e856a23");
    
    // 2. Asunto del correo
    formData.append("subject", "Nuevo mensaje desde la Web - Capuzzo & Berroa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-brand-green py-28 md:py-36 px-6 relative overflow-hidden" id="contacto">
      {/* Detalles decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
        
        {/* Columna Izquierda: Información (Intacta) */}
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
          <div className="bg-brand-offwhite p-8 md:p-12 relative overflow-hidden h-full">
            {/* Detalle de esquina */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-brand-gold/30" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-brand-gold/30" />

            {status === "success" ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 flex flex-col items-center justify-center h-full"
                >
                  {/* Círculo animado con check */}
                  <div className="relative mb-8">
                    {/* Anillo exterior giratorio */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                      className="w-24 h-24 rounded-full border-2 border-brand-gold/30 flex items-center justify-center"
                    >
                      {/* Círculo interior */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                        className="w-18 h-18 rounded-full bg-brand-gold/15 flex items-center justify-center"
                      >
                        {/* Ícono check */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.3, type: "spring", stiffness: 200 }}
                        >
                          <Check size={36} className="text-brand-gold" strokeWidth={2.5} />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Partículas decorativas */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: Math.cos((i * 60 * Math.PI) / 180) * 50,
                          y: Math.sin((i * 60 * Math.PI) / 180) * 50,
                          opacity: [1, 1, 0],
                        }}
                        transition={{ delay: 0.6 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-brand-gold -translate-x-1/2 -translate-y-1/2"
                      />
                    ))}
                  </div>

                  {/* Texto */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="font-heading text-3xl md:text-4xl text-brand-green mb-4"
                  >
                    ¡Mensaje Enviado!
                  </motion.h3>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="w-12 h-px bg-brand-gold/50 mb-6"
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="font-body text-brand-green/70 text-lg mb-10 max-w-sm leading-relaxed"
                  >
                    Hemos recibido su información. Uno de nuestros especialistas se comunicará con usted a la brevedad.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStatus("idle")}
                    className="group relative inline-flex items-center gap-2 bg-brand-gold text-brand-green font-body font-bold text-sm px-8 py-3 rounded-lg overflow-hidden uppercase tracking-wider"
                  >
                    <span className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500">
                      Enviar otro mensaje
                    </span>
                    <Send size={14} className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500" />
                    <span className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-lg" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            ) : (
              <>
                <h3 className="font-heading text-3xl text-brand-green mb-2">
                  Envíenos un Mensaje
                </h3>
                <div className="w-12 h-px bg-brand-gold/50 mb-8" />
                
                <form onSubmit={handleSubmit} className="space-y-6 font-body">
                  {/* Honeypot para evitar spam */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div>
                    <label htmlFor="nombre" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Nombre Completo</label>
                    {/* OJO: Agregué name="name" a todos los inputs */}
                    <input 
                      type="text" 
                      id="nombre" 
                      name="name"
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
                        name="email"
                        className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Teléfono</label>
                      <input 
                        type="tel" 
                        id="telefono" 
                        name="phone"
                        className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-brand-green font-semibold mb-2 text-sm tracking-wide">Mensaje o Caso</label>
                    <textarea 
                      id="mensaje" 
                      name="message"
                      rows={4} 
                      className="w-full bg-white border border-brand-gray/20 p-3.5 outline-none focus:border-brand-gold focus:shadow-[0_0_0_3px_rgba(159,135,91,0.1)] transition-all duration-300 text-brand-green resize-none"
                      required 
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="group relative w-full bg-brand-gold text-brand-green font-bold text-base py-4 overflow-hidden uppercase tracking-widest transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500">
                      {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                    </span>
                    {/* Quitamos la animación de hover mientras está cargando */}
                    {status !== "submitting" && (
                      <span className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    )}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-sm mt-2 text-center">Hubo un problema. Por favor intente nuevamente.</p>
                  )}
                </form>
              </>
            )}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}