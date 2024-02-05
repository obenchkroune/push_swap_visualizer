import { defineConfig } from "vite";
import commonjsExternalsPlugin from "vite-plugin-commonjs-externals";
import vue from "@vitejs/plugin-vue";

const commonjsPackages = [
  "electron",
  "electron/main",
  "electron/common",
  "electron/renderer",
];

export default defineConfig({
  optimizeDeps: {
    exclude: [...commonjsPackages, "node:*"],
    include: ["./src/components/**/*.vue"],
  },
  plugins: [
    vue(),
    commonjsExternalsPlugin({
      externals: [...commonjsPackages, /^node:(.+)$/],
    }),
  ],
});
