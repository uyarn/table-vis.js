import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import alias from 'rollup-plugin-alias';
const path = require('path')
export default [{
	input: 'src/index.js',
	name:'table_vis',
	output: {
		file: 'dist/table_vis.min.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
	  alias({
			reslove:['.js'],
    	className: path.join(__dirname,'src/_DOM/className'),
			colData: path.join(__dirname,'src/_Data/colData'),
			rowData: path.join(__dirname,'src/_Data/rowData')
    }),
		resolve(),
		commonjs(),
		uglify(),
		postcss({
      plugins: []
    })
	]
},
{
	input: 'src/index.js',
	output:{
		file:'dist/table_vis.js',
		format:'cjs'
	},
	plugins: [
		alias({
		 reslove:['.js'],
 		 className: path.join(__dirname,'src/_DOM/className'),
		 colData: path.join(__dirname,'src/_Data/colData'),
		 rowData: path.join(__dirname,'src/_Data/rowData')
		}),
		postcss({
      plugins: []
    }),
		// resolve(),
		// commonjs(),
		uglify()
	]
}];
