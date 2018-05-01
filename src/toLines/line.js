'use strict';

import base from '../base/base';
import drawLine from './drawLine';
import insertCss from '../dom/insertCss';
import className from '../dom/className';

const line=(val,direction)=>{
  // 判断绑定的参数是否为dom元素
    let cell= base(val,direction);
    let cellData=[];
    // to insert the diagram css style
    insertCss();
    for(let i =0;i<cell.length;i++){
      cellData.push(cell[i].innerHTML);
      // use the indexOf method of Array to get the postion of each cell
      let cellIndex=Array.prototype.indexOf.call(cell,cell[i]);
      cell[i].addEventListener('mouseover',
        (event)=>{

          let e=event||window.event;
          console.log(e.clientY)
          //className.addClass(cell[i],'tabular-vis-diagram');
          //drawLine(cell,cellData)
        },true)
    }
}
/*!
 *  exports the module
 */
export default line;
