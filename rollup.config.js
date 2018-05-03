import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default [{
	input: 'src/index.js',
	name:'tabular_vis',
	output: {
		file: 'dist/tabular_vis.min.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		uglify()
	]
},
{
	input: 'src/index.js',
	output:{
		file:'dist/tabular_vis.js',
		format:'cjs'
	},
	plugins: [
		// resolve(),
		// commonjs(),
		uglify()
	]
}];
