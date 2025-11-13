import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import github from "@astrojs/github";

// https://astro.build/config
export default defineConfig({
  site: "https://martinmatus100.github.io/cava24-demo", 
  integrations: [svelte(), github()],
  outDir: "dist",
});
