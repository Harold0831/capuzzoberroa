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
    desc: "Asesoría integral para empresas. Nos encargamos de la constitución de sociedades, fusiones, adquisiciones, gobierno corporativo y cumplimiento normativo (Compliance) para asegurar el éxito y la legalidad de sus operaciones comerciales.",
    icon: Building2
  },
  {
    title: "Derecho Civil",
    desc: "Protegemos sus intereses en la resolución de conflictos, redacción y revisión de contratos, manejo de obligaciones, responsabilidad civil y reclamos por daños y perjuicios de manera estratégica.",
    icon: Scale
  },
  {
    title: "Derecho Inmobiliario",
    desc: "Acompañamiento legal riguroso en operaciones de compraventa, redacción de contratos de arrendamiento, estructuración de proyectos inmobiliarios, gestión de condominios y fideicomisos.",
    icon: Landmark
  },
  {
    title: "Derecho Laboral",
    desc: "Asesoría especializada tanto a empleadores como a trabajadores en la redacción de contratos, manejo de desahucios, despidos, cálculo de prestaciones y representación experta en litigios laborales.",
    icon: Briefcase
  },
  {
    title: "Derecho de Familia",
    desc: "Manejo sensible, discreto y altamente profesional de procesos de divorcio, partición de bienes, sucesiones, testamentos, tutelas y acuerdos de guarda y custodia.",
    icon: Users
  },
  {
    title: "Litigios y Resolución de Conflictos",
    desc: "Diseñamos estrategias avanzadas de mediación y arbitraje para evitar procesos prolongados. Cuando es ineludible, le representamos con firmeza y determinación en los tribunales de la República.",
    icon: FileText
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

      {/* Lista de Servicios */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div 
                  className="group bg-white p-8 md:p-12 border border-brand-gray/10 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-500 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
                >
                  {/* Línea lateral dorada */}
                  <div className="absolute left-0 top-0 w-px h-0 bg-brand-gold group-hover:h-full transition-all duration-500" />

                  <div className="bg-brand-green/5 p-5 text-brand-green group-hover:bg-brand-green group-hover:text-brand-gold transition-all duration-500 shrink-0">
                    <Icon size={36} strokeWidth={1.3} />
                  </div>
                  
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl text-brand-green mb-4 group-hover:text-brand-gold transition-colors duration-300">
                      {area.title}
                    </h2>
                    <p className="font-body text-brand-gray text-lg leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-24">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-brand-green p-12 md:p-16 text-center relative overflow-hidden">
            {/* Detalles decorativos */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-brand-gold/20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-brand-gold/20" />
            
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-gold mb-6 relative z-10">
              ¿Necesita asesoría en alguna de estas áreas?
            </h3>
            <p className="font-body text-brand-beige/80 text-lg mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Cada situación es única. Permítanos escuchar su caso y trazar la mejor ruta legal para proteger sus intereses.
            </p>
            <Link 
              href="/#contacto" 
              className="group relative inline-flex items-center gap-2 bg-brand-gold text-brand-green font-body font-bold text-base px-10 py-4 overflow-hidden uppercase tracking-wider z-10"
            >
              <span className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500">
                Agendar Consulta
              </span>
              <ArrowRight size={18} className="relative z-10 group-hover:text-brand-offwhite transition-colors duration-500" />
              <span className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}