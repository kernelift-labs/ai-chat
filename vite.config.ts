import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import { createLibConfigs } from '@kernelift/configs';

const baseConfigs = createLibConfigs({
  libName: '@kernelift/chat',
  srcEntry: fileURLToPath(new URL('./src', import.meta.url)),
  externalDeps: ['@kernelift/markdown']
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          comments: false
        }
      }
    }),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: true // 启用 Rollup 打包而不是简单复制
    })
  ],
  ...baseConfigs
});
