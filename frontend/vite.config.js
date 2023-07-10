// vite.config.js

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    manifest: true,
    outDir: '../dist',
    assetsDir: '',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    sourcemap: true,
  },
});