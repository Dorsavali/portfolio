import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [react(),tailwindcss(),Sitemap({
      hostname: "https://dorsavalli.com",
    }),],
  resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
})
