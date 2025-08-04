// vite.config.js using the recommended plugin
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // Import the new plugin

export default defineConfig({
  plugins: [
    tailwindcss(), // Here, you DO use parentheses!
  ],
});