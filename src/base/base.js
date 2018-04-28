'use strict';

const rowBase = require('./rowBase');
const colBase = require('./colBase');


const base = (vis_cell,direction) => {
  // Base模块, 用于绑定元素的基本模块, 选择行元素或是列元素
  // base module, used to bind the table data cell, to choose either row or column
  let countCell;
  const directionList={
          'row':rowBase,
          'col':colBase
        }
  // 判断绑定的参数是否为dom元素
  //
  typeof vis_cell == "object"?(
      direction in directionList? countCell = directionList[direction](vis_cell)
                                :console.error('please type row or col as direction'))
                            :console.error("the cell bind doesn't come from DOM ");
  return countCell;
}
/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
    module.exports = base;
}
