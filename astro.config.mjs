
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- Add the static import here

export default defineConfig({
  // The integrations array now uses the imported function directly
  integrations: [
    tailwind(), // <-- Use the function directly
  ],
});
