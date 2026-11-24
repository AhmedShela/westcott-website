// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://westcottcc.org',
  trailingSlash: 'always',
  // Languages: English is the default. To add Spanish later, add 'es' here,
  // add translations in src/i18n/ui.ts, and add content with `lang: es`.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
});
