import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Support new features in React 19
      babel: {
        plugins: [
          // Add babel plugins if needed
        ]
      }
    })
  ],
  // envPrefix: ['VITE_', 'REACT_APP_'],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@dapp': path.resolve(__dirname, './src/dapp'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },

  // Development server configuration
  // server: {
  //   port: 5173,
  //   host: true,
  //   open: true,
  // },

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Only split Three.js (largest library and not dependent on React)
          if (id.includes('node_modules/three')) {
            return 'three-vendor'
          }
          // All other node_modules dependencies are put in vendor to ensure correct loading order
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    // Increase chunk size warning threshold
    chunkSizeWarningLimit: 1000,
  },

  // Optimize dependencies pre-building
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'viem',
      'antd',
      'motion/react',
    ],
    exclude: [
      // Exclude dependencies that don't need pre-building
    ]
  },

  // Define global constants
  define: {
    // Define global variables if needed
    'process.env': {}
  }
})
