'use strict';
// Used to modify the format of numberical data.
import numericalData from './numericalData';
import cateData from './cateData';
import className from 'className'

const regData=(cell,idx)=>{
  let data =[];
  let title =[];
  let reg = new RegExp(/^\d+\.?\d*$/);
  let pre = cell[0][0].innerHTML.replace(/\,/g,'')
  if(idx){

    cell[0].forEach(function(d){
      className.addClass(d,'tabular_highlight')
    })
  }
  if(reg.test(pre))
  {
    return numericalData(cell,reg,data,title)
  }
  else
  {
    return cateData(cell[0],data,title)
  }

}

export default regData;
