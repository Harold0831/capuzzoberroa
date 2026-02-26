import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const query = `*[_type == "noticia" && slug.current == $slug][0] {
  titulo,
  fecha,
  imagenPrincipal, 
  contenido
}`;

export default async function NoticiaPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const noticia = await client.fetch(query, { slug });

  if (!noticia) {
    notFound();
  }

  return (
    <article className="bg-brand-offwhite min-h-screen">
      
      {/* Cabecera con imagen hero */}
      <div className="bg-brand-green pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-brand-green to-brand-green/95" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <AnimatedSection>
            <Link 
              href="/noticias" 
              className="inline-flex items-center gap-2 text-brand-gold/70 font-body text-sm hover:text-brand-gold transition-colors duration-300 mb-10 group uppercase tracking-wider"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Volver a noticias
            </Link>

            {noticia.fecha && (
              <div className="flex items-center gap-2 font-body text-sm text-brand-beige/60 uppercase tracking-wider mb-6">
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

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-gold leading-tight mb-8">
              {noticia.titulo}
            </h1>
            <div className="w-16 h-px bg-brand-gold/50" />
          </AnimatedSection>
        </div>
      </div>

      {/* Contenido */}
      <div className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">

          {/* Imagen principal */}
          {noticia.imagenPrincipal && (
            <AnimatedSection>
              <div className="relative w-full h-100 md:h-125 overflow-hidden mb-16 shadow-xl border border-brand-gray/10">
                <Image
                  src={urlFor(noticia.imagenPrincipal).url()}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedSection>
          )}

          {/* Texto del artículo */}
          <AnimatedSection delay={0.1}>
            <div className="font-body text-lg text-brand-gray leading-relaxed prose prose-lg prose-headings:font-heading prose-headings:text-brand-green prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline prose-blockquote:border-brand-gold/30 prose-blockquote:text-brand-gray/80 prose-strong:text-brand-green max-w-none">
              {noticia.contenido ? (
                <PortableText value={noticia.contenido} />
              ) : (
                <p>No hay contenido disponible para este artículo.</p>
              )}
            </div>
          </AnimatedSection>

          {/* Divider y volver */}
          <AnimatedSection delay={0.2}>
            <div className="mt-20 pt-10 border-t border-brand-gray/10">
              <Link 
                href="/noticias" 
                className="group inline-flex items-center gap-3 font-body text-sm text-brand-green hover:text-brand-gold transition-colors duration-300 uppercase tracking-wider"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                Volver a todas las noticias
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </article>
  );
}