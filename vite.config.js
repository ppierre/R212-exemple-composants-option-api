import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueTypeImport from "vite-plugin-vue-type-imports";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueTypeImport()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
