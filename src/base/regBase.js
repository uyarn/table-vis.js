'use strict';

const regBase=(cell)=>{
  let regCell =[];
  let reg = new RegExp(/^\d+\.?\d*$/);
  for(let i =0;i<cell.length;i++){
      // 替换千分位中的逗号字符
      let val = cell[i].innerHTML.replace(/\,/g,'');
      if(!reg.test(val))
        cell.splice(i,1);
      else
        regCell.push(val);
  }
  return regCell;
}

export default regBase;
