import { defineField, defineType } from 'sanity'

export const noticia = defineType({
  name: 'noticia',
  title: 'Noticia / Artículo Legal',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      description: 'El título principal del artículo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Enlace (URL)',
      type: 'slug',
      description: 'Genera el enlace amigable para la web (ej. /noticias/mi-articulo)',
      options: {
        source: 'titulo', // Toma el título automáticamente para generar la URL
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha de Publicación',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      }
    }),
    defineField({
      name: 'imagenPrincipal',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true, // ¡Magia! Permite a las abogadas elegir qué parte de la foto es la importante si se recorta
      },
    }),
    defineField({
      name: 'contenido',
      title: 'Cuerpo del Artículo',
      type: 'array',
      of: [{ type: 'block' }], // Esto le dice a Sanity que genere un editor de texto estilo Word/Notion
    }),
  ],
})