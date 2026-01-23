import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(),
      ],
      publicDir: 'public',
      define: {
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Optimize chunk splitting to reduce dependency chains
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunk - React and core dependencies
              'vendor': ['react', 'react-dom'],
              // Motion library - heavy, load separately
              'motion': ['motion/react'],
              // UI utilities
              'ui': ['lucide-react'],
            },
          },
        },
        // Improve chunk size warnings
        chunkSizeWarningLimit: 500,
        // Enable minification
        minify: 'esbuild',
        // Target modern browsers for smaller bundles
        target: 'es2020',
        // Enable CSS code splitting
        cssCodeSplit: true,
      },
    };
});
