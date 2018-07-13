'use strict'

const numericalData=(cell,data,title)=>{
  for(let i =0;i<cell[0].length;){
      // 替换千分位中的逗号字符
      let val = cell[0][i].innerHTML.replace(/\,/g,'');
      data.push(val);
      title.push(cell[1][i].innerHTML)
      i++;
   }
   return { data:data, title:title };
}

export default numericalData;
