import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const site = process.env.SITE ?? 'careerm'

// https://vite.dev/config/
export default defineConfig({
  root: `sites/${site}`,
  build: {
    outDir: `../../dist/${site}`,
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
})
