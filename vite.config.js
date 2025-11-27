import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server:{
    host:true, //escucha todas las interfaces
    port:8000, //opcional es el puerto al cual se conectara o usar
  },
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
