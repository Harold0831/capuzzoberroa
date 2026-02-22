import Link from "next/link";
import { 
  Building2, 
  Scale, 
  Landmark, 
  Briefcase, 
  Users, 
  FileText 
} from "lucide-react";

// Creamos nuestra "base de datos" local de servicios
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
    desc: "Asesoría a empleadores y trabajadores en contratos, desincahucios y litigios laborales.", 
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

export default function ServicesSection() {
  return (
    <section className="bg-brand-green py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-gold mb-4">
            Áreas de Práctica
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6 opacity-50"></div>
          <p className="font-body text-brand-beige text-lg max-w-2xl mx-auto">
            Cubrimos un amplio espectro legal para brindarle la tranquilidad 
            y el respaldo jurídico que usted y su empresa necesitan.
          </p>
        </div>

        {/* Cuadrícula de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group border border-brand-gold/20 bg-brand-green p-8 hover:bg-brand-gold/5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 bg-brand-gold/10 w-16 h-16 flex items-center justify-center rounded-sm text-brand-gold group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-heading text-2xl text-brand-gold mb-4">
                  {service.title}
                </h3>
                
                <p className="font-body text-brand-beige mb-8 flex-grow leading-relaxed opacity-90">
                  {service.desc}
                </p>
                
                <Link 
                  href="/servicios" 
                  className="font-body text-brand-offwhite font-semibold flex items-center gap-2 group-hover:text-brand-gold transition-colors mt-auto w-fit"
                >
                  Saber más
                  <span className="transform transition-transform group-hover:translate-x-2">
                    &rarr;
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Botón central para ver todos los servicios */}
        <div className="mt-16 text-center">
          <Link 
            href="/servicios" 
            className="inline-block border-2 border-brand-gold text-brand-gold font-body font-semibold px-10 py-3 hover:bg-brand-gold hover:text-brand-green transition-all"
          >
            Ver Todos los Servicios
          </Link>
        </div>

      </div>
    </section>
  );
}