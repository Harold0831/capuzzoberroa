'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import StudioLogo from './src/sanity/components/StudioLogo'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Capuzzo & Berroa — Admin',

  icon: StudioLogo,

  studio: {
    components: {
      logo: StudioLogo,
    },
  },

  schema,
  plugins: [
    structureTool({structure}),
    // visionTool removido — solo para desarrolladores
  ],
})
