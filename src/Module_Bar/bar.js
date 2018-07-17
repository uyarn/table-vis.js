'use strict';

import drawBar from './drawBar';
// insert css style to head

const bar=function(ori,data,index,direct,title,titleIdx){

    drawBar(ori,data,index,direct,title,titleIdx);
}
/*!
 *  exports the bar chart module.
 */
export default bar;
