const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');

esbuild.build({
	entryPoints: ['index.js'],
	bundle: true,
	outdir: 'dist',
	plugins: [
		sveltePlugin({
			compilerOptions: {
				css: false,
				hydratable: true
			}
		})
	],
	minify: false,
	incremental: true,
	watch: {
		onRebuild (error, result) {
			console.log('REBUILD');
			if (error) console.error('SVELTE watch build failed:', error);
		}
	},
}).catch((error) => {
	console.log(error);
});