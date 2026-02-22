"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Formulario simulado enviado con éxito!");
  };

  return (
    <section className="bg-brand-green py-24 md:py-32 px-6" id="contacto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Columna Izquierda: Información */}
        <div className="text-brand-offwhite">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold mb-6">
            Agende su Consulta
          </h2>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <p className="font-body text-brand-beige text-lg mb-12 leading-relaxed">
            Estamos listos para escuchar su caso y brindarle la asesoría legal 
            estratégica que necesita. Contáctenos hoy mismo para programar 
            una evaluación confidencial.
          </p>

          <div className="space-y-8 font-body text-lg">
            <div className="flex items-start gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1">Nuestra Oficina</h3>
                <p className="text-brand-beige">Av. Principal 123, Edificio Legal, Piso 4.<br/>Santo Domingo, República Dominicana</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1">Teléfono</h3>
                <p className="text-brand-beige">+1 (809) 555-0199</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-sm text-brand-gold">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1">Correo Electrónico</h3>
                <p className="text-brand-beige">info@capuzzoberroa.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="bg-brand-offwhite p-8 md:p-12 rounded-sm shadow-xl">
          <h3 className="font-heading text-3xl text-brand-green mb-8">
            Envíenos un Mensaje
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6 font-body">
            <div>
              <label htmlFor="nombre" className="block text-brand-green font-semibold mb-2">Nombre Completo</label>
              <input 
                type="text" 
                id="nombre" 
                className="w-full bg-white border border-brand-gray/30 p-3 outline-none focus:border-brand-gold transition-colors text-brand-green"
                required 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-brand-green font-semibold mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white border border-brand-gray/30 p-3 outline-none focus:border-brand-gold transition-colors text-brand-green"
                  required 
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-brand-green font-semibold mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  className="w-full bg-white border border-brand-gray/30 p-3 outline-none focus:border-brand-gold transition-colors text-brand-green"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-brand-green font-semibold mb-2">Mensaje o Caso</label>
              <textarea 
                id="mensaje" 
                rows={4} 
                className="w-full bg-white border border-brand-gray/30 p-3 outline-none focus:border-brand-gold transition-colors text-brand-green resize-none"
                required 
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-gold text-brand-green font-bold text-lg py-4 hover:bg-opacity-90 transition-all uppercase tracking-wider"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}