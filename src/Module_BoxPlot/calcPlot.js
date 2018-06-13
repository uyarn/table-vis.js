'use strict';
import quickSort from './quickSort';

const calcPlot=function(data){
  // sort data;
  let calc = data ;
  calc = quickSort(calc);
  // calc Q3,Q1
  let len = (calc.length+1)*0.25;
  let q3 = calc[Math.floor(len*3)],
      q1 = calc[Math.floor(len)];
  let boxPlotData=
  {
    min: calc[0],
    max: calc[calc.length-1],
    middle: calc[Math.floor(calc.length/2)],
    q3: q3,
    q1: q1
  }
  return boxPlotData
}
/*!
 *  exports the calcPlot chart module.
 */
export default calcPlot;
