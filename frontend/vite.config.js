// vite.config.js

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react(), reactRefresh()],
  build: {
    manifest: true,
    outDir: '../dist',
    assetsDir: '',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: true,
  },
});