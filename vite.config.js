import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
function locatePATH (path) {
  return fileURLToPath(new URL(path, import.meta.url));
}

export default defineConfig({
   build: {
      manifest: true,
      chunkSizeWarningLimit: 1600
    },
    resolve: {
      alias: {
        '@': locatePATH('./src'),
        '~@': locatePATH('./src'),
        '@assets': locatePATH('./src/assets'),
        '@components': locatePATH('./src/components'),
        '@configurations': locatePATH('./src/configurations'),
        '@libs': locatePATH('./src/libs'),
        '@pages': locatePATH('./src/pages'),
        '@plugins': locatePATH('./src/plugins'),
        '@router': locatePATH('./src/router'),
        '@services': locatePATH('./src/services'),
        '@stores': locatePATH('./src/stores'),
        '@styles': locatePATH('./src/styles'),
        '@utils': locatePATH('./src/utils')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "style.css" as *;'
        }
      }
    },
    plugins: [
      vue()
    ]
})
