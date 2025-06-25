import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-c0",
    project: "javascript-react"
  })],
  base: '/apple-website/', // <<< دي الإضافة المهمة عشان GitHub Pages
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },
  build: {
    sourcemap: true
  }
})
