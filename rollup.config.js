import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
// const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	name:'tabular_vis',
	output: {
		file: 'dist/tabular_vis.min.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	output:{
		file:'dist/tabular_vis.js',
		format:'cjs'
	},
	plugins: [
		resolve(),
		commonjs(),
		uglify() // minify, but only in production
	]
};
