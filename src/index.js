'use strict';
import bar from './toBars/bar';
import line from './toLines/line';
import pie from './toPies/pie' ;
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
