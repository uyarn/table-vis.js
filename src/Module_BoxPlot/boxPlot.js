'use strict';

// import box plot basic modules.
import drawBoxPlot from './drawBoxPlot';
import calcPlot from './calcPlot';

const boxPlot=function(data,index,direct,title){

    let boxPlotData = calcPlot(data);
    drawBoxPlot(data,index,boxPlotData,direct,title);
}
/*!
 *  exports the boxPlot chart module.
 */
export default boxPlot;
