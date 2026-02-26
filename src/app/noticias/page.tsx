import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Actualidad Legal | Capuzzo & Berroa Legal Studio",
  description: "Artículos, análisis y novedades sobre el panorama jurídico y legal.",
};

const query = `*[_type == "noticia"] | order(fecha desc) {
  _id,
  titulo,
  "slug": slug.current,
  fecha,
  imagenPrincipal
}`;

export const revalidate = 60; 

export default async function NoticiasPage() {
  const noticias = await client.fetch(query);

  return (
    <div className="bg-brand-offwhite min-h-screen pb-28">
      
      {/* Cabecera */}
      <section className="bg-brand-green pt-40 pb-28 px-6 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-brand-green to-brand-green/95" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <span className="font-body text-sm text-brand-gold/70 tracking-[0.3em] uppercase mb-4 block">
              Nuestro Blog
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-brand-gold mb-6 tracking-wide">
              Actualidad Legal
            </h1>
            <div className="w-16 h-px bg-brand-gold/50 mx-auto mb-8" />
            <p className="font-body text-xl text-brand-beige/80 leading-relaxed max-w-2xl mx-auto">
              Análisis profundo, actualizaciones normativas y perspectiva 
              jurídica sobre los temas que impactan su entorno.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cuadrícula de Noticias */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          
          {noticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticias.map((noticia: any, index: number) => (
                <AnimatedSection key={noticia._id} delay={index * 0.08}>
                  <article className="bg-white hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group border border-brand-gray/10 hover:border-brand-gold/30 h-full relative">
                    {/* Línea dorada top */}
                    <div className="absolute top-0 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-500" />
                    
                    {/* Imagen */}
                    <div className="relative h-56 w-full bg-brand-beige/50 overflow-hidden">
                      {noticia.imagenPrincipal ? (
                        <Image
                          src={urlFor(noticia.imagenPrincipal).url()}
                          alt={noticia.titulo}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-brand-green/10">
                          <span className="font-heading text-3xl">C&B</span>
                        </div>
                      )}
                      {/* Overlay sutil en hover */}
                      <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-500" />
                    </div>

                    {/* Contenido */}
                    <div className="p-8 flex flex-col grow">
                      {noticia.fecha && (
                        <div className="flex items-center gap-2 font-body text-xs text-brand-gold font-semibold uppercase tracking-wider mb-4">
                          <Calendar size={14} />
                          <time>
                            {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                      )}
                      
                      <h2 className="font-heading text-2xl text-brand-green mb-6 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                        <Link href={`/noticias/${noticia.slug}`}>
                          {noticia.titulo}
                        </Link>
                      </h2>
                      
                      <div className="mt-auto pt-6 border-t border-brand-gray/10">
                        <Link 
                          href={`/noticias/${noticia.slug}`} 
                          className="inline-flex items-center gap-2 font-body font-semibold text-sm text-brand-green hover:text-brand-gold transition-colors duration-300 uppercase tracking-wider"
                        >
                          Leer artículo 
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-24 bg-white border border-brand-gray/10">
                <div className="w-16 h-px bg-brand-gold/30 mx-auto mb-8" />
                <p className="font-body text-xl text-brand-gray">
                  Próximamente publicaremos nuestros primeros artículos y análisis legales.
                </p>
              </div>
            </AnimatedSection>
          )}

        </div>
      </section>

    </div>
  );
}