// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: swap for the real domain once it is registered — the sitemap,
  // canonical URLs and Open Graph tags all derive from this.
  site: 'https://prosites.co.za',
  // Thank-you pages are noindex, so listing them in the sitemap would send
  // Google a contradictory signal.
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
