'use strict';
// Used to modify the format of numberical data.
import numericalData from './numericalData';
import cateData from './cateData';
import className from 'className'

const regData=(cell,idx)=>{
  let data =[];
  let title =[];
  let oriData =[];
  // a series of reg expression.
  let pre = cell[0][0].innerHTML.replace(/\,/g,'')
  let reg = /^\d+\.?\d*$/;
  let percentFormat = /^\d+\.?\d+\%$/
  let fraction =/^\d+\/\d+$/
  if(idx){
    cell[0].forEach( d => {
      className.addClass(d,'tabular_highlight')
    })
  }
  // numerical Data procss branch
  if(reg.test(pre)||percentFormat.test(pre)||fraction.test(pre))
      return numericalData(cell,data,title,oriData)
  // category Data procss branch
  else
      return cateData(cell[0],data,title,oriData)
}

export default regData;
