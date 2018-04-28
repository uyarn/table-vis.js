'use strict';
const line = require('./toLines/line');
const tabular_vis={
    line:line,
    bar:bar

}

/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && typeof exports === `object`){
    module.exports = tabular_vis;
}
