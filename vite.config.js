import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
   
    assetsDir: 'assets',
    manifest: true,
    sourcemap: true, 
  },
  server: {
    headers: {
      'Cache-Control': 'no-store', 
    }
  }
})

