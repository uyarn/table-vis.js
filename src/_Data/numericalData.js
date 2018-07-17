'use strict'

const numericalData=(cell,data,title,oriData)=>{
  for(let i =0;i<cell[0].length;){
      let val = cell[0][i].innerHTML
      let modiVal = val.replace(/\,|\%/g,'')
      let fraction = /^\d+\/\d+$/

      if(fraction.test(modiVal)){
        let modiSplit = modiVal.split('/')
        modiVal = modiSplit[0]/modiSplit[0]
      }
      oriData.push(val)
      data.push(modiVal)
      title.push(cell[1][i].innerHTML)
      i++;
   }
   return { oriData:oriData ,data:data, title:title };
}

export default numericalData;
