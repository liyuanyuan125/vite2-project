import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock"; // mock
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 定义别名
      "@": resolve("src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://jsonplaceholder.typicode.com", // 代理 假数据地址
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  plugins: [vue(), viteMockServe({})],
});
// 报错： at Object.<anonymous> (/Users/liyuanyuan/vueProject/vite-project/node_modules/vite-plugin-mock/node_modules/esbuild/bin/esbuild:2:7)
// 执行 node ./node_modules/vite-plugin-mock/node_modules/esbuild/install.js
