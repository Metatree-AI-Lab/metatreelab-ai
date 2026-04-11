// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://metatreelab.ai',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
        },
      },
    }),
  ],

  // Bilingual routing: English (default, no prefix) + Chinese (/zh prefix)
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Build output to dist/ for GitHub Pages
  output: 'static',

  // Tailwind CSS v4 via Vite plugin (CSS-first config)
  vite: {
    plugins: [tailwindcss()],
  },

  // Server-side build options
  build: {
    // Inline small assets under 4kB as data URIs
    inlineStylesheets: 'auto',
  },

  // SEO / sitemap handled in layout via <link rel="alternate">
  trailingSlash: 'always',
});
