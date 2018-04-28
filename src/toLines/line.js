'use strict';

const base=require('../base/base.js');
const drawLine =require('./drawLine');

const line=function(val,direction){
  // 判断绑定的参数是否为dom元素
    let cell= base(val,direction);
    let cellData=[];
    for(let i =0;i<cell.length;i++){
      cellData.push(cell[i].innerHTML);
      // use the indexOf method of Array to get the postion of each cell
      let cellIndex=Array.prototype.indexOf.call(cell,cell[i]);
      cell[i].addEventListener('mouseover',drawLine(cellData,))
    }
}

/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = line;
}
