import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoImport from "./config/plugin/autoImport";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), autoImport()],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src")
      }
    ]
  },

  server: {
    host: "0.0.0.0", // 允许外部访问
    port: 4090, // 自定义端口
    open: true // 启动后自动打开浏览器
    // proxy: {
    //   "/api": {
    //     target: "https://your-backend.com", // 后端接口地址
    //     changeOrigin: true, // 允许跨域
    //     rewrite: (path) => path.replace(/^\/api/, "") // 处理路径
    //   }
    // }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";` // 全局引入 SCSS 变量
      }
    }
  }

  // build: {
  //   target: "esnext", // 现代浏览器支持
  //   outDir: "dist", // 指定打包输出目录
  //   assetsDir: "assets", // 静态资源目录
  //   sourcemap: false, // 生产环境不开启 sourcemap
  //   minify: "esbuild" // 使用 esbuild 进行压缩
  // },

  // esbuild: {
  //   drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : []
  // },

  // define: {
  //   __APP_VERSION__: JSON.stringify("1.0.0") // 自定义全局变量
  // }
});
