'use strict';

import base from '../base/base';
import drawBar from './drawBar';
// insert css style to head
import insertCss from '../dom/insertCss';
// create fixed div tabular
import createTabular from '../dom/createTabular';
import swapTabularVis from '../dom/swapTabularVis';

const bar=function(table,direction,index){
  // 判断绑定的参数是否为dom元素
    let cell= base(table,direction,index);
    let cellData=[];
    let click=false;
    let reg = new RegExp(/^\d+\.?\d*$/);
    let tabular_container;
    // to insert the diagram css style

    // this is to reslove the prolem of choosing multi rows and column
    if(!this.initial){
      insertCss();
      tabular_container=createTabular();
      this.initial = true;
    }
    else {
      tabular_container = document.getElementById('tabular_vis');
    }
    for(let i =0;i<cell.length;i++){
        if(!reg.test(cell[i].innerHTML)){
          cell.splice(i,1);
        }
    }
    for(let i =0;i<cell.length;i++){
        cellData.push(cell[i].innerHTML);
        // use the indexOf method of Array to get the postion of each cell
        let cellIndex=Array.prototype.indexOf.call(cell,cell[i]);
        // add mouseenter event
        cell[i].style.cursor='pointer';
        cell[i].addEventListener('click',
          ()=>{
            // let e=event||window.event;
            click=swapTabularVis(click,tabular_container);
            if(click)
              drawBar(cellData,cellIndex);

          },true);
    }
}
/*!
 *  exports the module
 */
export default bar;
