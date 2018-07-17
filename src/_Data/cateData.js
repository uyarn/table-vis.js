'use strict'

const cateData =(rawData,data,title,oriData)=>{
  let titleIdx=[];
  for(let i =0;i<rawData.length;i++){
      let td = rawData[i].innerHTML;
      if(title.includes(td))
      {
        let idx = title.indexOf(td);
        titleIdx[idx].push(i);
        data[idx]++;
      }
      else
      {
          data.push(1);
          title.push(td)
          titleIdx.push([i]);
      }
   }
   return { oriData:oriData, data:data, title:title ,titleIdx:titleIdx};
}

export default cateData;
