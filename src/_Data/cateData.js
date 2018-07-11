'use strict'

const cateData =(rawData,data,title)=>{
  let titleIdx=[];
  for(let i =0;i<rawData.length;i++){
      // 替换千分位中的逗号字符
      let td = rawData[i].innerHTML;
      if(title.includes(td)){
        let idx = title.indexOf(td);
        titleIdx[idx].push(i);
        data[idx]++;
      }
      else{
          data.push(1);
          title.push(td)
          titleIdx.push([i]);
      }
   }
   console.log(titleIdx)
   return { data:data, title:title ,titleIdx:titleIdx};
}

export default cateData;
