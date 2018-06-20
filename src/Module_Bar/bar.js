'use strict';

import drawBar from './drawBar';
// insert css style to head
// create fixed div tabular
import swapTabularVis from '../_DOM/swapTabularVis';

const bar=function(data,index,direct,title){
    drawBar(data,index,direct,title);
}
/*!
 *  exports the bar chart module.
 */
export default bar;
