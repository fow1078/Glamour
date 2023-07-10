import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/src/main.jsx',
    },
  },
})