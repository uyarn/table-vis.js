'use strict';
import quickSort from './quickSort';

const calcPlot=function(data){
  // sort data;
  let calc = data;
  calc =quickSort(calc);
  let len = data.length;
  // calc Q3,Q1
  let mid,q3Idx,q1Idx;
  let midIdx = Math.floor(calc.length/2);
  // calculate middle
  if(calc.length%2!=0)
    mid = calc[midIdx]
  else
    mid = (calc[midIdx-1]+calc[midIdx])/2
  // calculate Q1
  q1Idx = (1+len)/4;
  let q1Int = parseInt(q1Idx);
  let q1L = q1Int+1 - q1Idx;
  let q1 = (q1L)*calc[q1Int-1] + (1-q1L)*calc[q1Int]
  // calculate Q3
  q3Idx = q1Idx*3;
  let q3Int = parseInt(q3Idx)
  let q3L = parseInt(q3Idx)+1 - q3Idx;
  let q3 = q3L*calc[q3Int-1] + (1-q3L)*calc[q3Int]
  let Iqr = q3 - q1;
  let min = q1-1.5*Iqr
  let max = q3+1.5*Iqr
  if(calc[0]>min)
      min = calc[0]
  if(calc[calc.length-1]<max)
      max = calc[calc.length-1]
  let boxPlotData=
  {
    min: min,
    max: max,
    middle:mid,
    q3: q3,
    q1: q1
  }
  return boxPlotData
}
/*!
 *  exports the calcPlot chart module.
 */
export default calcPlot;
