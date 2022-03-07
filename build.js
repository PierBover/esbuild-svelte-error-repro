const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const {globPlugin} = require('esbuild-plugin-glob');

esbuild.build({
	entryPoints: ['index.js'],
	bundle: true,
	outdir: 'dist',
	plugins: [
		globPlugin(),
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