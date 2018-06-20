'use strict';

const rowTitle = (table)=>{
  if(typeof table=="object")
    {
      let head = table.querySelector('thead');
      let title = head.querySelector('tr');
      title =Array.from(title.children)
      Array.prototype.shift.call(title)
      return title;
    }
  else
      console.error("the table bind doesn't come from DOM ");
}

export default rowTitle;
