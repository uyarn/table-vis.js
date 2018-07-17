'use strict';

// import box plot basic modules.
import drawBoxPlot from './drawBoxPlot';
import calcPlot from './calcPlot';

const boxPlot=function(ori,data,index,direct,title){

    let boxPlotData = calcPlot(data);
    drawBoxPlot(ori,data,index,boxPlotData,direct,title);
}
/*!
 *  exports the boxPlot chart module.
 */
export default boxPlot;
