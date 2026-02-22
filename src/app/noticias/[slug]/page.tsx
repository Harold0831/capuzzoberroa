import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image"; // <-- Importamos el traductor de imágenes
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image"; // <-- Componente oficial de Next.js
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// 1. Agregamos imagenPrincipal a la consulta GROQ
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
    <article className="bg-brand-offwhite min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-gold font-body hover:text-brand-green transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <header className="mb-12">
          {noticia.fecha && (
            <time className="font-body text-brand-gray mb-4 block">
              {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
          <h1 className="font-heading text-4xl md:text-5xl text-brand-green leading-tight mb-8">
            {noticia.titulo}
          </h1>

          {/* 2. Renderizamos la imagen solo si las abogadas subieron una */}
          {noticia.imagenPrincipal && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden mb-12 shadow-md">
              <Image
                src={urlFor(noticia.imagenPrincipal).url()} // Traducimos la imagen
                alt={noticia.titulo}
                fill // Hace que la imagen ocupe todo el contenedor
                className="object-cover" // Evita que se deforme
                priority // Le dice a Next.js que la cargue de inmediato
              />
            </div>
          )}
          
          <div className="w-24 h-1 bg-brand-gold mt-8"></div>
        </header>

        <div className="font-body text-lg text-brand-gray leading-relaxed prose prose-lg prose-headings:font-heading prose-headings:text-brand-green prose-a:text-brand-gold max-w-none">
          {noticia.contenido ? (
            <PortableText value={noticia.contenido} />
          ) : (
            <p>No hay contenido disponible para este artículo.</p>
          )}
        </div>

      </div>
    </article>
  );
}