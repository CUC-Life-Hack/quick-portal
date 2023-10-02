import * as vite from 'vite';

export default vite.defineConfig({
	root: '.',
	base: '/',
	publicDir: 'public',
	server: {
		port: 12404,
	},
	build: {
		emptyOutDir: true,
		cssMinify: true,
		outDir: 'build',
		minify: true,
		target: 'es6',
	},
});