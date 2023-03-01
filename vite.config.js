import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],

	// Configure the Sass preprocessor
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass
            }
        }
    },
})
