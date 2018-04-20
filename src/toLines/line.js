'use strict';
const base=require('../base/base.js');
const line=function(val,direction){
  // 判断绑定的参数是否为dom元素
    base(val,direction);
}

/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = line;
}
