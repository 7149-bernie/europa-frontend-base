import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    })
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      // originally: entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'europa-frontend-base',
      fileName: (format) => `europa-frontend-base.${format}.js`,
      formats: ['es', 'cjs'],
    },

    // bundler options
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})

