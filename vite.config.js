import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import mkcert from 'vite-plugin-mkcert';
import path from "path";

// export default defineConfig({
// 	plugins: [mkcert(), sveltekit()],
// 	ssr: {
// 		noExternal: ['three']
// 	},
// 	test: {
// 		include: ['src/**/*.{test,spec}.{js,ts}']
// 	}
// });

export default defineConfig({
    server: {
        proxy: {}
    },
	resolve: {
		alias: {
		  $lib: path.resolve("./src/lib"),
		},
	  },
    plugins: [mkcert(), sveltekit()]
});