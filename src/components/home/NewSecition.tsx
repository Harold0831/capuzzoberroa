import Link from "next/link";
import { client } from "@/sanity/lib/client"; 

const query = `*[_type == "noticia"] | order(fecha desc)[0...3] {
  _id,
  titulo,
  "slug": slug.current,
  fecha
}`;


export default async function NewsSection() {
  // Hacemos la petición a Sanity
  const noticias = await client.fetch(query);

  return (
    <section className="bg-brand-offwhite py-24 px-6 border-t border-brand-gray/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-4xl text-brand-green mb-4">
              Actualidad Legal
            </h2>
            <div className="w-16 h-1 bg-brand-gold mb-6"></div>
            <p className="font-body text-brand-gray text-lg max-w-xl">
              Manténgase informado con nuestros últimos análisis y artículos sobre el panorama jurídico.
            </p>
          </div>
          
          <Link 
            href="/noticias" 
            className="font-body text-brand-gold font-semibold hover:text-brand-green transition-colors flex items-center gap-2"
          >
            Ver todas las noticias &rarr;
          </Link>
        </div>

        {/* Cuadrícula de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia: any) => (
            <article 
              key={noticia._id} 
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-gold flex flex-col h-full"
            >
              {/* Mostramos la fecha si existe */}
              {noticia.fecha && (
                <time className="font-body text-sm text-brand-gray mb-3 block">
                  {new Date(noticia.fecha).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              
              <h3 className="font-heading text-2xl text-brand-green mb-4 leading-snug">
                {noticia.titulo}
              </h3>
              
              <div className="mt-auto pt-6">
                <Link 
                  href={`/noticias/${noticia.slug}`} 
                  className="font-body text-brand-gold font-medium hover:underline decoration-2 underline-offset-4"
                >
                  Leer artículo completo
                </Link>
              </div>
            </article>
          ))}

          {/* Mensaje por si no hay noticias creadas aún */}
          {noticias.length === 0 && (
            <p className="text-brand-gray italic col-span-full">
              Próximamente publicaremos nuevos artículos.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}