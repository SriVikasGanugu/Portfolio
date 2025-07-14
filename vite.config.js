import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Portfolio/', // Set this to '/<REPO>/' for GitHub Pages
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  }
}) 