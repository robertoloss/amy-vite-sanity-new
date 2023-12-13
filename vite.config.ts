import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
	optimizeDeps: {
    include: ['./src/sanity/**/*'], // Specify the path to your sanity folder
  },
})



//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
//
//// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})
