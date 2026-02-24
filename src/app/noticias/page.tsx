import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualidad Legal | Capuzzo & Berroa Legal Studio",
  description: "Artículos, análisis y novedades sobre el panorama jurídico y legal.",
};

// Consulta GROQ para traer TODAS las noticias, de la más nueva a la más vieja
const query = `*[_type == "noticia"] | order(fecha desc) {
  _id,
  titulo,
  "slug": slug.current,
  fecha,
  imagenPrincipal
}`;

// Forzamos a Next.js a actualizar esta página seguido para que las noticias nuevas aparezcan rápido
export const revalidate = 60; 

export default async function NoticiasPage() {
  const noticias = await client.fetch(query);

  return (
    <div className="bg-brand-offwhite min-h-screen pb-24">
      
      {/* Cabecera de la Página */}
      {/* TIP: Aquí es donde luego puedes inyectar la foto en blanco y negro de la laptop como fondo */}
      <section className="bg-brand-green pt-40 pb-24 px-6 mb-16 border-b border-brand-gold/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl text-brand-gold mb-6 tracking-wide">
            Actualidad Legal
          </h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 opacity-70"></div>
          <p className="font-body text-xl text-brand-beige leading-relaxed max-w-2xl mx-auto">
            Análisis profundo, actualizaciones normativas y perspectiva 
            jurídica sobre los temas que impactan su entorno.
          </p>
        </div>
      </section>

      {/* Cuadrícula de Todas las Noticias */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          
          {noticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticias.map((noticia: any) => (
                <article 
                  key={noticia._id} 
                  className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-brand-gray/10"
                >
                  {/* Imagen de la tarjeta */}
                  <div className="relative h-56 w-full bg-brand-beige overflow-hidden">
                    {noticia.imagenPrincipal ? (
                      <Image
                        src={urlFor(noticia.imagenPrincipal).url()}
                        alt={noticia.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-brand-green/20">
                        {/* Placeholder si no hay imagen */}
                        <span className="font-heading text-2xl">C&B</span>
                      </div>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-8 flex flex-col flex-grow">
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
                    
                    <h2 className="font-heading text-2xl text-brand-green mb-6 leading-snug group-hover:text-brand-gold transition-colors">
                      <Link href={`/noticias/${noticia.slug}`}>
                        {noticia.titulo}
                      </Link>
                    </h2>
                    
                    <div className="mt-auto">
                      <Link 
                        href={`/noticias/${noticia.slug}`} 
                        className="inline-flex items-center gap-2 font-body font-semibold text-brand-green hover:text-brand-gold transition-colors"
                      >
                        Leer artículo <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-brand-gray/10 rounded-sm">
              <p className="font-body text-xl text-brand-gray">
                Próximamente publicaremos nuestros primeros artículos y análisis legales.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}