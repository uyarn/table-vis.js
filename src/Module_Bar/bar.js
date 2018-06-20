'use strict';

import drawBar from './drawBar';
// insert css style to head

const bar=function(data,index,direct,title){

    drawBar(data,index,direct,title);
}
/*!
 *  exports the bar chart module.
 */
export default bar;
