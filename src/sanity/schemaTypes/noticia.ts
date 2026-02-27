import { defineField, defineType } from 'sanity'

export const noticia = defineType({
  name: 'noticia',
  title: 'Noticia',
  type: 'document',

  // ── Grupos (pestañas) para organizar los campos ──
  groups: [
    {
      name: 'contenido',
      title: '✏️ Contenido',
      default: true,
    },
    {
      name: 'media',
      title: '🖼️ Media',
    },
    {
      name: 'seo',
      title: '🔍 SEO & URL',
    },
  ],

  fields: [
    // ── GRUPO: Contenido ──
    defineField({
      name: 'titulo',
      title: 'Título del artículo',
      type: 'string',
      group: 'contenido',
      description: 'El título que verán los visitantes de la página. Debe ser claro y descriptivo.',
      placeholder: 'Ej: Nuevas regulaciones en derecho comercial 2025',
      validation: (Rule) =>
        Rule.required().error('El título es obligatorio')
          .min(10).warning('Un buen título debería tener al menos 10 caracteres')
          .max(120).error('El título no puede superar los 120 caracteres'),
    }),

    defineField({
      name: 'fecha',
      title: 'Fecha de publicación',
      type: 'date',
      group: 'contenido',
      description: 'La fecha en que se publicó o publicará este artículo.',
      initialValue: () => new Date().toISOString().split('T')[0],
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) => Rule.required().error('La fecha es obligatoria'),
    }),

    defineField({
      name: 'extracto',
      title: 'Resumen / Extracto',
      type: 'text',
      group: 'contenido',
      rows: 3,
      description: 'Un breve resumen del artículo (aparece en las tarjetas de vista previa).',
      placeholder: 'Escribe un resumen breve del contenido del artículo...',
      validation: (Rule) =>
        Rule.max(280).warning('El extracto debería ser breve (máximo 280 caracteres)'),
    }),

    defineField({
      name: 'contenido',
      title: 'Cuerpo del artículo',
      type: 'array',
      group: 'contenido',
      description: 'Escribe el contenido completo del artículo. Puedes usar negritas, cursivas, listas y añadir imágenes.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título grande', value: 'h2' },
            { title: 'Subtítulo', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
              { title: 'Subrayado', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Enlace externo',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description: 'Pega aquí la dirección web (ej: https://ejemplo.com)',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir en nueva pestaña',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          title: 'Imagen dentro del artículo',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Descripción de la imagen',
              description: 'Describe brevemente qué se ve en la imagen (importante para accesibilidad).',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Pie de foto (opcional)',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().error('El artículo necesita contenido'),
    }),

    // ── GRUPO: Media ──
    defineField({
      name: 'imagenPrincipal',
      title: 'Imagen de portada',
      type: 'image',
      group: 'media',
      description: 'La imagen principal que aparecerá como portada del artículo. Recomendado: 1200×630 px.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Descripción de la imagen',
          description: 'Describe qué se ve en la imagen (importante para Google y accesibilidad).',
        }),
      ],
      validation: (Rule) => Rule.required().error('La imagen de portada es obligatoria'),
    }),

    // ── GRUPO: SEO & URL ──
    defineField({
      name: 'slug',
      title: 'Dirección web (URL)',
      type: 'slug',
      group: 'seo',
      description: 'Se genera automáticamente desde el título. Haz clic en "Generate" para crearlo.',
      options: {
        source: 'titulo',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // quita acentos
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, ''),
      },
      validation: (Rule) => Rule.required().error('La URL es obligatoria. Haz clic en "Generate" para generarla automáticamente.'),
    }),

    defineField({
      name: 'metaDescripcion',
      title: 'Descripción para Google (Meta)',
      type: 'text',
      group: 'seo',
      rows: 2,
      description: 'Este texto aparece en los resultados de Google debajo del título. Ideal: 150–160 caracteres.',
      placeholder: 'Escribe una descripción atractiva para los resultados de búsqueda...',
      validation: (Rule) =>
        Rule.max(160).warning('Google muestra hasta 160 caracteres en los resultados de búsqueda'),
    }),
  ],

  // ── Vista previa en la lista de documentos ──
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'fecha',
      media: 'imagenPrincipal',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Sin título',
        subtitle: subtitle
          ? new Date(subtitle + 'T00:00:00').toLocaleDateString('es-DO', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'Sin fecha',
        media,
      }
    },
  },

  // ── Orden por defecto: más reciente primero ──
  orderings: [
    {
      title: 'Fecha (más reciente)',
      name: 'fechaDesc',
      by: [{ field: 'fecha', direction: 'desc' }],
    },
    {
      title: 'Fecha (más antiguo)',
      name: 'fechaAsc',
      by: [{ field: 'fecha', direction: 'asc' }],
    },
    {
      title: 'Título A–Z',
      name: 'tituloAsc',
      by: [{ field: 'titulo', direction: 'asc' }],
    },
  ],
})