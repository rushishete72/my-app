import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/my-app/", // GitHub Pages के लिए बेस पाथ
  plugins: [react()],
})