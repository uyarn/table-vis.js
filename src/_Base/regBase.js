'use strict';

const regBase=(cell)=>{
  let regCell =[];
  let title =[];
  let reg = new RegExp(/^\d+\.?\d*$/);
  for(let i =0;i<cell[0].length;){
      // 替换千分位中的逗号字符
      let val = cell[0][i].innerHTML.replace(/\,/g,'');

      if(!reg.test(val)){
        cell[0].splice(i,1);
        cell[1].splice(i,1)
      }
      else{
          //
          regCell.push(val);
          title.push(cell[1][i].innerHTML)
          i++;
      }

  }

  return [regCell,title];
}

export default regBase;
