import * as Vite from 'vite';
import * as Path from 'path';

const __dirname = Path.dirname(new URL(import.meta.url).pathname);

export default Vite.defineConfig({
	root: '.',
	base: '/',
	publicDir: 'public',
	server: {
		port: 12404,
		host: true,
		strictPort: true,
	},
	build: {
		emptyOutDir: true,
		cssMinify: true,
		outDir: 'build',
		minify: true,
		target: 'es6',
	},
});
