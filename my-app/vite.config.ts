import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Netlify doesn't need subdirectory
  build: {
    assetsInlineLimit: 0, // Prevent inlining of assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]' // No hash, preserve exact file
      }
    }
  }
})
