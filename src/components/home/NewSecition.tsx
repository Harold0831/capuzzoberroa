import Link from "next/link";
import { client } from "@/sanity/lib/client"; 
import AnimatedSection from "@/components/ui/AnimatedSection";

const query = `*[_type == "noticia"] | order(fecha desc)[0...3] {
  _id,
  titulo,
  "slug": slug.current,
  fecha
}`;


export default async function NewsSection() {
  const noticias = await client.fetch(query);

  return (
    <section className="bg-brand-offwhite py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Detalle decorativo */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <AnimatedSection>
            <div>
              <span className="font-body text-sm text-brand-gold/80 tracking-[0.3em] uppercase mb-4 block">
                Blog & Noticias
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-green mb-4">
                Actualidad Legal
              </h2>
              <div className="w-16 h-px bg-brand-gold/60 mb-6" />
              <p className="font-body text-brand-gray text-lg max-w-xl leading-relaxed">
                Manténgase informado con nuestros últimos análisis y artículos sobre el panorama jurídico.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Link 
              href="/noticias" 
              className="group font-body text-brand-gold font-semibold flex items-center gap-2 relative"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 group-hover:after:w-full">
                Ver todas las noticias
              </span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </AnimatedSection>
        </div>

        {/* Cuadrícula de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia: any, index: number) => (
            <AnimatedSection key={noticia._id} delay={index * 0.1}>
              <article 
                className="group bg-white p-8 lg:p-10 border border-brand-gray/10 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Línea dorada superior */}
                <div className="absolute top-0 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-500" />

                {noticia.fecha && (
                  <time className="font-body text-xs text-brand-gold/80 tracking-[0.2em] uppercase mb-4 block">
                    {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
                
                <h3 className="font-heading text-2xl text-brand-green mb-6 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {noticia.titulo}
                </h3>
                
                <div className="mt-auto pt-6 border-t border-brand-gray/10">
                  <Link 
                    href={`/noticias/${noticia.slug}`} 
                    className="font-body text-brand-green/70 font-medium hover:text-brand-gold transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    Leer artículo
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}

          {noticias.length === 0 && (
            <div className="col-span-full text-center py-16 border border-brand-gray/10">
              <p className="font-body text-brand-gray text-lg">
                Próximamente publicaremos nuevos artículos.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}