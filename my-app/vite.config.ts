import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'my-app' with your actual repository name
  build: {
    assetsInlineLimit: 0, // Prevent inlining of assets
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Preserve original image names and extensions
          if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
