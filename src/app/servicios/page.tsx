import { 
  Building2, 
  Scale, 
  Landmark, 
  Briefcase, 
  Users, 
  FileText,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Áreas de Práctica | Capuzzo & Berroa Legal Studio",
  description: "Conozca nuestras áreas de especialización legal: Derecho Corporativo, Civil, Inmobiliario, Laboral y de Familia.",
};

const areas = [
  {
    title: "Derecho Corporativo",
    desc: "Constitución de sociedades, fusiones, adquisiciones, gobierno corporativo y cumplimiento normativo para asegurar el éxito de sus operaciones comerciales.",
    icon: Building2,
    highlights: ["Constitución de sociedades", "Fusiones y adquisiciones", "Compliance"],
  },
  {
    title: "Derecho Civil",
    desc: "Resolución de conflictos, redacción y revisión de contratos, manejo de obligaciones y reclamos por daños y perjuicios de manera estratégica.",
    icon: Scale,
    highlights: ["Contratos", "Responsabilidad civil", "Daños y perjuicios"],
  },
  {
    title: "Derecho Inmobiliario",
    desc: "Operaciones de compraventa, contratos de arrendamiento, proyectos inmobiliarios, gestión de condominios y fideicomisos con rigor legal.",
    icon: Landmark,
    highlights: ["Compraventa", "Arrendamientos", "Fideicomisos"],
  },
  {
    title: "Derecho Laboral",
    desc: "Asesoría a empleadores y trabajadores en contratos, desahucios, despidos, prestaciones laborales y representación en litigios.",
    icon: Briefcase,
    highlights: ["Contratos laborales", "Prestaciones", "Litigios"],
  },
  {
    title: "Derecho de Familia",
    desc: "Manejo sensible y profesional de procesos de divorcio, partición de bienes, sucesiones, testamentos, tutelas y custodia.",
    icon: Users,
    highlights: ["Divorcio", "Sucesiones", "Custodia"],
  },
  {
    title: "Litigios y Resolución de Conflictos",
    desc: "Estrategias de mediación y arbitraje para evitar procesos prolongados. Representación firme y determinada ante los tribunales.",
    icon: FileText,
    highlights: ["Mediación", "Arbitraje", "Representación judicial"],
  }
];

export default function ServiciosPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen pb-28">
      
      {/* Cabecera */}
      <section className="bg-brand-green pt-40 pb-28 px-6 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-brand-green to-brand-green/95" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="font-body text-sm text-brand-gold/70 tracking-[0.3em] uppercase mb-4 block">
              Nuestras Especialidades
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-brand-gold mb-6 tracking-wide">
              Áreas de Práctica
            </h1>
            <div className="w-16 h-px bg-brand-gold/50 mx-auto mb-8" />
            <p className="font-body text-xl text-brand-beige/80 leading-relaxed max-w-2xl mx-auto">
              Ofrecemos un catálogo de servicios jurídicos integrales, 
              diseñados para brindar seguridad y resultados tangibles a nuestros clientes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const num = String(index + 1).padStart(2, "0");
            return (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="group relative bg-white rounded-2xl p-8 pt-10 border border-brand-gray/8 hover:border-brand-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                  
                  {/* Número de orden */}
                  <span className="absolute top-4 right-5 font-heading text-5xl text-brand-gray/6 group-hover:text-brand-gold/12 transition-colors duration-500 select-none leading-none">
                    {num}
                  </span>

                  {/* Ícono */}
                  <div className="mb-6 w-14 h-14 rounded-xl bg-brand-green/5 flex items-center justify-center group-hover:bg-brand-green group-hover:scale-105 transition-all duration-500">
                    <Icon size={28} strokeWidth={1.4} className="text-brand-green group-hover:text-brand-gold transition-colors duration-500" />
                  </div>
                  
                  {/* Título */}
                  <h2 className="font-heading text-xl text-brand-green mb-3 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {area.title}
                  </h2>

                  {/* Descripción */}
                  <p className="font-body text-brand-gray/80 text-sm leading-relaxed mb-6 grow">
                    {area.desc}
                  </p>

                  {/* Tags / highlights */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {area.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs text-brand-green/70 bg-brand-green/5 px-3 py-1 rounded-full group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Borde inferior animado */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-24">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-brand-green rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Detalles decorativos */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-brand-gold/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-brand-gold/20 rounded-br-2xl" />
            
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-gold mb-6 relative z-10">
              ¿Necesita asesoría en alguna de estas áreas?
            </h3>
            <p className="font-body text-brand-beige/80 text-lg mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Cada situación es única. Permítanos escuchar su caso y trazar la mejor ruta legal para proteger sus intereses.
            </p>
            <Link 
              href="/contacto" 
              className="group relative inline-flex items-center gap-2 bg-brand-gold text-brand-green font-body font-bold text-base px-10 py-4 rounded-xl overflow-hidden uppercase tracking-wider z-10"
            >
              <span className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500">
                Agendar Consulta
              </span>
              <ArrowRight size={18} className="relative z-10 group-hover:text-brand-offwhite group-hover:translate-x-1 transition-all duration-500" />
              <span className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-xl" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}