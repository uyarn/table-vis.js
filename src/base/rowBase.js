'use strict';

const rowBase = (table,index)=>{
  if(typeof table=="object")
    {
      let selectT =  table.getElementsByTagName('tbody')[0];
      let row = selectT.getElementsByTagName('tr')[index-1];
      return Array.from(row.children);
    }
  else
    console.error("the table bind doesn't come from DOM ");
}

export default rowBase;
