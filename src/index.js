'use strict';
import bar from './Module_Bar/bar';
import line from './Module_Line/line';
import pie from './Module_Pie/pie' ;
import point from './Module_Point/point';

import boxPlot from './Module_BoxPlot/boxPlot';

const table_vis={
    initial:false,
    bar:bar,
    line:line,
    pie:pie,
    point:point,
    boxPlot:boxPlot
}
/*!
 *  exports the module
 */
export default table_vis;
