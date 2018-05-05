'use strict';

const colBase = (table,col_index)=>{
  if(typeof table=="object")
    {
      let selectBody = table.getElementsByTagName('tbody')[0];
      let selectArr  = selectBody.children;
      let tdArr = [];
      for (let i =0; i<selectArr.length;i++){
        tdArr.push(selectArr[i].children[col_index])
      };
      return tdArr;
    }

  else
    console.error("the cell bind doesn't come from DOM ");
}

export default colBase;
