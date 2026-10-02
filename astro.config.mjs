// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain once you have one (used for the sitemap and social previews).
export default defineConfig({
  site: 'https://your-domain.dev',
  integrations: [mdx(), sitemap()],
});
