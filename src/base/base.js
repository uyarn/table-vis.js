'use strict';

import rowBase from './rowBase';
import colBase from './colBase';
const base=(cell,direct)=>{
  // Base模块, 用于绑定元素的基本模块, 选择行元素或是列元素
  // base module, used to bind the table data cell, to choose either row or column
  let countCell;
  // 判断绑定的参数是否为dom元素
  if(direct=='row'){
       countCell=rowBase(cell);
       return countCell;
     }
     else{
       if(direct=='col'){
         countCell=colBase(cell);
         return countCell;
       }
       else
         console.error('please type row or col as direction');
     }
}
/*!
 *  exports the module
 */
export default base;
