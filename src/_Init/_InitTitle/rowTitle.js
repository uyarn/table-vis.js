'use strict';

const rowTitle = (table)=>{
  if(typeof table=="object")
    {
      let head = table.querySelector('thead');
      let title = head.querySelector('tr')
      return Array.from(title.children);
    }
  else
      console.error("the table bind doesn't come from DOM ");
}

export default rowTitle;
