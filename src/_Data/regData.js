'use strict';
// Used to modify the format of numberical data.
import numericalData from './numericalData';
import cateData from './cateData';

const regData=(cell)=>{
  let data =[];
  let title =[];
  let reg = new RegExp(/^\d+\.?\d*$/);
  let pre = cell[0][0].innerHTML.replace(/\,/g,'')

  if(reg.test(pre)){
    return numericalData(cell,reg,data,title)
  }
  else{
    return cateData(cell[0],data,title)
  }

}

export default regData;
