'use strict';

const rowTitle = (table)=>{
    let head = table.querySelector('thead');
    let title = head.querySelector('tr');
    let children = Array.from(title.children)
    let row=[]
    Array.prototype.shift.call(children)
    children.forEach(d =>{
      while(d.children[0])
        {  d = d.children[0] }
      row.push(d.innerHTML)
    })
    return row;
}

export default rowTitle;
