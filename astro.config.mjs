// @ts-check

import { defineConfig, svgoOptimizer, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://spldecks.com',
  trailingSlash: 'always',
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  experimental: {
    svgOptimizer: svgoOptimizer(),
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        jpeg: { mozjpeg: true },
        webp: { effort: 6, alphaQuality: 80 },
        avif: { effort: 4, chromaSubsampling: '4:2:0' },
        png: { compressionLevel: 9 },
      },
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: [400, 500, 600, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), icon(), partytown()],
});