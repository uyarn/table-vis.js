'use strict';

const colBase = (table,col_index)=>{
  if(typeof table=="object")
    {
      let selectBody = table.getElementsByTagName('tbody')[0];
      let selectArr  = selectBody.children;
      let tdArr = [];
      let title =[];
      for (let i =0; i<selectArr.length;i++){
        tdArr.push(selectArr[i].children[col_index]);
        title.push(selectArr[i].children[0])
      };
      return [tdArr,title];
    }

  else
    console.error("the cell bind doesn't come from DOM ");
}

export default colBase;
