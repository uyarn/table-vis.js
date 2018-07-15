import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import alias from 'rollup-plugin-alias';
const path = require('path')
const aliasList =
	{
		reslove:['.js'],
		className: path.join(__dirname,'src/_DOM/className'),
		colData: path.join(__dirname,'src/_Data/colData'),
		swapTabularVis:path.join(__dirname,'src/_DOM/swapTabularVis'),
		rowData: path.join(__dirname,'src/_Data/rowData'),
		indexData: path.join(__dirname,'src/_Data/indexData'),
		bar:path.join(__dirname,'src/Module_Bar/bar'),
		line:path.join(__dirname,'src/Module_Line/line'),
		boxplot:path.join(__dirname,'src/Module_BoxPlot/boxplot'),
		pie:path.join(__dirname,'src/Module_Pie/pie'),
		point:path.join(__dirname,'src/Module_Point/point'),
		canvasBase:path.join(__dirname,'src/_Canvas/canvasBase'),
		drawLineBase:path.join(__dirname,'src/_Canvas/drawLineBase'),
		drawMarkBase:path.join(__dirname,'src/_Canvas/drawMarkBase')
	}
export default [{
	input: 'src/index.js',
	name:'table_vis',
	watch:{
    chokidar:{
			swapTabularVis:path.join(__dirname,'src/_DOM/swapTabularVis')
		}
	},
	output: {
		file: 'dist/table_vis.min.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
	  alias(aliasList),
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
		alias(aliasList),
		postcss({
      plugins: []
    }),
		// resolve(),
		// commonjs(),
		uglify()
	]
}];
