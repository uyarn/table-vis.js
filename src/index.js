'use strict';
import bar from './Module_Bar/bar';
import line from './Module_Line/line';
import pie from './Module_Pie/pie' ;
const table_vis={
    initial:false,
    bar:bar,
    line:line,
    pie:pie
}
/*!
 *  exports the module
 */
export default table_vis;
