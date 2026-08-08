import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Caminho absoluto a partir deste arquivo — `__dirname` não existe em ESM.
const page = name => fileURLToPath(new URL(`./${name}.html`, import.meta.url))

export default defineConfig({
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      // Build multi-página: a landing (SPA) mais as três páginas legais, que são
      // HTML estático de propósito — precisam ser legíveis sem JavaScript para
      // valer como documento e para serem lidas por crawlers.
      input: {
        main: page('index'),
        privacidade: page('privacidade'),
        termos: page('termos'),
        entrega: page('entrega')
      }
    }
  }
})
