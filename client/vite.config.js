import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});


// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['express', 'buffer'], // Wyklucz wszystkie moduły, które mogą być ładowane w przeglądarce
//   },
//   build: {
//     rollupOptions: {
//       external: ['express', 'buffer'] // Wyklucz dla builda
//     }
//   },
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5100',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });