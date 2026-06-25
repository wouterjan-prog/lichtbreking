import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.lichtbreking.nl',
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    routing: { prefixDefaultLocale: false },
  },
});
