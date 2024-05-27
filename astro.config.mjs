import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({

	site: 'https://gilbertL97.github.io',
	integrations: [tailwind()],
	renderers: ['@astrojs/renderer-github-pages'],
	i18n: {
		defaultLocale: 'en',
		locales: ['es', 'en']
	}
})
