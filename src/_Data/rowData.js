'use strict'

import regData from './regData';

const rowData = function(ele,title,idx){
   let row = ele.parentNode;
   let rowList = Array.from(row.children)
   // default remove the first column 默认移除第一行列名
   rowList.shift();
   let reg = regData([rowList,title],idx)
   let data ={
      data:reg.data,
      title:reg.title,
      oriData:reg.oriData,
      index: Array.prototype.indexOf.call(rowList,ele)
    };
    if('titleIdx' in reg)
      Object.assign(data,{titleIdx:reg.titleIdx})

   return data;
}

export default rowData;
