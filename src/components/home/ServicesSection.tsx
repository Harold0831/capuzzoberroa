"use client";

import Link from "next/link";
import { 
  Building2, 
  Scale, 
  Landmark, 
  Briefcase, 
  Users, 
  FileText 
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const services = [
  { 
    title: "Derecho Corporativo", 
    desc: "Asesoría integral para empresas, desde su constitución hasta fusiones y cumplimiento normativo.", 
    icon: Building2 
  },
  { 
    title: "Derecho Civil", 
    desc: "Resolución de conflictos, redacción de contratos, obligaciones y responsabilidad civil.", 
    icon: Scale 
  },
  { 
    title: "Derecho Inmobiliario", 
    desc: "Acompañamiento legal riguroso en compraventa, arrendamientos y desarrollo de proyectos.", 
    icon: Landmark 
  },
  { 
    title: "Derecho Laboral", 
    desc: "Asesoría a empleadores y trabajadores en contratos, desahucios y litigios laborales.", 
    icon: Briefcase 
  },
  { 
    title: "Derecho de Familia", 
    desc: "Manejo sensible y profesional de divorcios, sucesiones, tutelas y acuerdos familiares.", 
    icon: Users 
  },
  { 
    title: "Resolución de Conflictos", 
    desc: "Estrategias avanzadas de mediación, arbitraje y litigio para proteger sus intereses.", 
    icon: FileText 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function ServicesSection() {
  return (
    <section className="bg-brand-green py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Detalle decorativo */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        {/* Encabezado */}
        <AnimatedSection className="text-center mb-20">
          <span className="font-body text-sm text-brand-gold/70 tracking-[0.3em] uppercase mb-4 block">
            Nuestras Especialidades
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-gold mb-6">
            Áreas de Práctica
          </h2>
          <div className="w-16 h-px bg-brand-gold/50 mx-auto mb-6" />
          <p className="font-body text-brand-beige text-lg max-w-2xl mx-auto leading-relaxed">
            Cubrimos un amplio espectro legal para brindarle la tranquilidad 
            y el respaldo jurídico que usted y su empresa necesitan.
          </p>
        </AnimatedSection>

        {/* Cuadrícula de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="group relative border border-brand-gold/15 bg-brand-green p-8 lg:p-10 hover:border-brand-gold/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Brillo hover */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-gold/0 to-brand-gold/0 group-hover:from-brand-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8 w-14 h-14 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform duration-500">
                    <Icon size={36} strokeWidth={1.2} />
                  </div>
                  
                  <h3 className="font-heading text-2xl text-brand-gold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-body text-brand-beige/80 mb-8 grow leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <Link 
                    href="/servicios" 
                    className="font-body text-brand-offwhite/70 font-medium flex items-center gap-2 group-hover:text-brand-gold transition-colors duration-300 w-fit"
                  >
                    Saber más
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botón CTA */}
        <AnimatedSection delay={0.3} className="mt-20 text-center">
          <Link 
            href="/servicios" 
            className="group relative inline-block border border-brand-gold/60 text-brand-gold font-body font-semibold tracking-wider uppercase px-12 py-4 overflow-hidden transition-all duration-500 hover:border-brand-gold"
          >
            <span className="relative z-10 group-hover:text-brand-green transition-colors duration-500">
              Ver Todos los Servicios
            </span>
            <span className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}