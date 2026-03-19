import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://adamsneed.com',
  trailingSlash: 'always',
  adapter: cloudflare({
    platformProxy: { enabled: false }
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
