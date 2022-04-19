import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import markdown from 'vite-plugin-md';
import Inspect from 'vite-plugin-inspect';
import Pages from 'vite-plugin-pages'
const markdownRenderer = require('markdown-it')();
import markdownPrism from 'markdown-it-prism'
// 引入markdwon代码块处理
const mdConfig = require('./src/config/md.config');
// markdown文件高亮样式
import hljs from 'highlight.js';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    }),
    markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        xhtmlOut: true,
        highlight: (str: any, lang: any) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
            } catch (__) {
            }
          }
          return '<pre class="hljs"><code>' + markdownRenderer.utils.escapeHtml(str) + '</code></pre>';
        }
      },
      markdownItSetup(md) {
        mdConfig(md);
        // md.use(require('markdown-it-anchor'))
        // md.use(require('markdown-it-prism'))
      },
      wrapperClasses: 'markdown-container',
    }),
    Pages({
      pagesDir: 'pages',
      extensions: ['vue', 'md'],
    }),
    Inspect(),
  ],

  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
  * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
  * @default 'dist'
  */
  // outDir: 'dist',
  server: {
    // hostname: '0.0.0.0',
    host: "localhost",
    port: 3001,
    // // 是否自动在浏览器打开
    // open: true,
    // // 是否开启 https
    // https: false,
    // // 服务端渲染
    // ssr: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3333/',
        changeOrigin: true,
        ws: true,
        rewrite: (pathStr) => pathStr.replace('/api', '')
      },
    },
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      less: path.resolve(__dirname, "./src/less"),
      assets: path.resolve(__dirname, "./src/assets"),
      com: path.resolve(__dirname, "./src/components"),
      store: path.resolve(__dirname, "./src/store"),
      mixins: path.resolve(__dirname, "./src/mixins")
    },
  }
})
