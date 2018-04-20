'use strict';

const rowBase = require('./rowBase');
const colBase = require('./colBase');

// 用于绑定元素的基本模块
const base= (vis_cell,direction) => {

  let moduleBase;
  let directionBase;

  const directionList={
          'row':rowBase,
          'col':colBase}
  // 判断绑定的参数是否为dom元素
  typeof vis_cell == "object"?(
      direction in directionList?
          directionList[direction](vis_cell)
          :
          console.error('方向请输入 row 或 col, please type row or col as direction')
      ):
      console.error("the cell bind doesn't come from DOM ");

}
/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = base;
}
