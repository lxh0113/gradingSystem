import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router']
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle:"sass"
      })]
    }),
    // ElementPlus({
    //   useSource:true,
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    // loaderOptions:{
    //   sass:{
    //     prependData: `@import "@/styles/project/index.scss";`
    //   }
    // },
    preprocessorOptions: {
      scss: {
        // 这里的路径要和刚刚写的 index.scss 文件路径一致
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      },
    },
  },
})
