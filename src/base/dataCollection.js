'use strict';

// 用于table中收集相关元素的基本模块
const dataCollection=function(vis_cell){

  // 判断绑定的参数是否为dom元素
  typeof vis_cell=="object"?
    vis_cell.childNodes.forEach(
      function(val){
        val.addEventListener('mouseover',function(){
          console.log('hello world');
        })
      })
  :console.error("the cell bind doesn't come from DOM ");

}

/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = dataCollection;
}
