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
    <div className="bg-brand-offwhite min-h-screen pb-24">
      
      {/* Cabecera de la Página */}
      <section className="bg-brand-green pt-40 pb-24 px-6 mb-16 border-b border-brand-gold/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-brand-gold mb-6 tracking-wide">
            Áreas de Práctica
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 opacity-70"></div>
          <p className="font-body text-xl text-brand-beige leading-relaxed">
            Ofrecemos un catálogo de servicios jurídicos integrales, 
            diseñados para brindar seguridad y resultados tangibles a nuestros clientes.
          </p>
        </div>
      </section>

      {/* Lista de Servicios */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 md:p-12 border border-brand-gray/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-8 items-start group rounded-sm"
              >
                {/* Ícono */}
                <div className="bg-brand-green/5 p-6 rounded-sm text-brand-green group-hover:bg-brand-green group-hover:text-brand-gold transition-colors shrink-0">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                
                {/* Contenido */}
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl text-brand-green mb-4">
                    {area.title}
                  </h2>
                  <p className="font-body text-brand-gray text-lg leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Llamado a la Acción (CTA) */}
      <section className="px-6 mt-24">
        <div className="max-w-4xl mx-auto bg-brand-green p-12 text-center rounded-sm relative overflow-hidden">
          {/* Brillo decorativo */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          
          <h3 className="font-heading text-3xl md:text-4xl text-brand-gold mb-6 relative z-10">
            ¿Necesita asesoría en alguna de estas áreas?
          </h3>
          <p className="font-body text-brand-beige text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Cada situación es única. Permítanos escuchar su caso y trazar la mejor ruta legal para proteger sus intereses.
          </p>
          <Link 
            href="/#contacto" 
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-body font-bold text-lg px-8 py-4 hover:bg-brand-offwhite transition-colors uppercase tracking-wider relative z-10"
          >
            Agendar Consulta <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}