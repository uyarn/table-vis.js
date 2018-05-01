'use strict';

import base from '../base/base';
import drawBar from './drawBar';
// insert css style to head
import insertCss from '../dom/insertCss';
// create fixed div tabular
import createTabular from '../dom/createTabular';
import swapTabularVis from '../dom/swapTabularVis';

const bar=(val,direction)=>{
  // 判断绑定的参数是否为dom元素
    let cell= base(val,direction);
    let cellData=[];
    let click=false;
    // to insert the diagram css style
    insertCss();
    let tabular_container=createTabular();
    for(let i =0;i<cell.length;i++){
      cellData.push(cell[i].innerHTML);
      // use the indexOf method of Array to get the postion of each cell
      let cellIndex=Array.prototype.indexOf.call(cell,cell[i]);
      // add mouseenter event
      cell[i].style.cursor='pointer';
      cell[i].addEventListener('click',
        (event)=>{
          let e=event||window.event;
          click=swapTabularVis(click,tabular_container,e.clientX,e.clientY);
          if(click){
            drawBar(cellData,cellIndex)
          }
        },true);
    }
}
/*!
 *  exports the module
 */
export default bar;
