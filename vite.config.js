import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

const CLOUDFLARE_TUNNEL_HOST = 'coral-eternal-weight-enclosure.trycloudflare.com';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server:{
    host:true, //escucha todas las interfaces
    port:8000, //opcional es el puerto al cual se conectara o usar
    strictPort: false,
    // permite los hosts que vienen de Cloudflare Tunnel
    allowedHosts: [CLOUDFLARE_TUNNEL_HOST, 'localhost', '127.0.0.1'],
  },
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
