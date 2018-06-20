'use strict'

import regData from './regData'

const colData = function(ele,title){
  let row = ele.parentNode;
  let tbody = row.parentNode.children;
  let colList=[]
  let index = Array.prototype.indexOf.call(row.children,ele)
  for (let i =0; i<tbody.length;i++){
    colList.push(tbody[i].children[index])
  };
  let reg =regData([colList,title])
  return {
     data:reg.data,
     title:reg.title,
     index:Array.prototype.indexOf.call(tbody,row)
     };
}

export default colData;
