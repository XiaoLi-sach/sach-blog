import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

const pathResolve = (dir: string) => resolve(__dirname, '.', dir)
// https://vitejs.dev/config/
const viteConfig = defineConfig({
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      },
      {
        find: /\/vt\//,
        replacement: pathResolve('vite') + '/'
      },
      {
        find: /\/imgs\//,
        replacement: pathResolve('src') + '/assets/images/'
      },
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/'
      }
    ]
  },
  base: '/',
  server: {
    host: true,
    port: 4044,
    open: true
  },
  // 强制预构建链接包
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn', 'element-plus/lib/locale/lang/en']
  },
  plugins: [vue()]
})

export default viteConfig
