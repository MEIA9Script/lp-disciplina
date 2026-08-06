import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build enxuto: apenas React. Sem UI kits, sem libs de animacao.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    cssCodeSplit: false,
    reportCompressedSize: false,
  },
})
