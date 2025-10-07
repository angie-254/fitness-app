import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //@ to replace with directory
    alias: [{find: '@', replacement: path.resolve(__dirname, "src")}]
  }
})
