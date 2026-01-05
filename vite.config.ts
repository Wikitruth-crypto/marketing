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
  envPrefix: ['VITE_', 'REACT_APP_'],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@dapp': path.resolve(__dirname, './src/dapp'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },

  // Development server configuration
  server: {
    port: 5173,
    host: true,
    open: true,
  },

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split node_modules dependencies into separate chunks
          if (id.includes('node_modules')) {
            // React core libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor'
            }
            // Three.js 3D library (large size, split separately)
            if (id.includes('three')) {
              return 'three-vendor'
            }
            // Ant Design UI library
            if (id.includes('antd')) {
              return 'ui-vendor'
            }
            // Motion animation library (relatively large, split separately)
            if (id.includes('motion')) {
              return 'motion-vendor'
            }
            // Web3 related libraries
            if (id.includes('viem')) {
              return 'web3-vendor'
            }
            // Icon libraries
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'icons-vendor'
            }
            // React Flow chart library
            if (id.includes('@xyflow')) {
              return 'flow-vendor'
            }
            // Other third-party libraries
            return 'vendor'
          }
        }
      }
    },
    // Lower chunk size warning limit for better bundle size control
    chunkSizeWarningLimit: 800,
  },

  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'viem',
      'antd',
    ],
    exclude: [
      // Exclude dependencies that don't need pre-bundling
    ]
  },

  // Define global constants
  define: {
    // Define global variables if needed
    'process.env': {}
  }
})
