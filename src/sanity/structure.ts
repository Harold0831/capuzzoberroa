import type {StructureResolver} from 'sanity/structure'
import SiteLink from './components/SiteLink'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Panel de Administración')
    .items([
      // ── Sección: Contenido ──
      S.listItem()
        .title('📰 Noticias y Artículos')
        .schemaType('noticia')
        .child(
          S.documentTypeList('noticia')
            .title('Todas las noticias')
            .defaultOrdering([{ field: 'fecha', direction: 'desc' }])
            .menuItems([
              S.orderingMenuItem({ name: 'fechaDesc', title: 'Más recientes', by: [{ field: 'fecha', direction: 'desc' }] }),
              S.orderingMenuItem({ name: 'fechaAsc', title: 'Más antiguas', by: [{ field: 'fecha', direction: 'asc' }] }),
              S.orderingMenuItem({ name: 'tituloAsc', title: 'Título A–Z', by: [{ field: 'titulo', direction: 'asc' }] }),
            ])
        ),

      // ── Separador visual ──
      S.divider(),

      // ── Enlace al sitio web ──
      S.listItem()
        .title('🌐 Ver sitio web')
        .child(
          S.component()
            .id('site-link')
            .component(SiteLink)
        ),
    ])
