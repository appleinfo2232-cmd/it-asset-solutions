import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      },
      webp: {
        quality: 80
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create separate chunks for large dependencies
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer-motion';
          }
          if (id.includes('node_modules/react-intersection-observer') || id.includes('node_modules/react-countup')) {
            return 'vendor-utils';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/react-helmet-async')) {
            return 'vendor-helmet';
          }
          if (id.includes('node_modules/lazysizes')) {
            return 'vendor-lazysizes';
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.debug', 'console.info']
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Improve CSS optimization
    cssCodeSplit: true,
    // Enable source maps for production debugging if needed
    sourcemap: false,
    // Optimize asset loading
    assetsInlineLimit: 4096, // 4kb
    // Improve asset compression
    reportCompressedSize: false
  },
  // Improve dev server performance
  server: {
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: false
    }
  },
  // Improve preview server performance
  preview: {
    port: 4173,
    host: true,
    strictPort: true
  },
  // Optimize CSS
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Add any preprocessor options here if needed
    }
  },
  // Improve module resolution
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});