// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bruno2204.github.io',
  // base: '/Bruno2204.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});