'use strict';

const rowTitle = (table)=>{
    let head = table.querySelector('thead');
    let title = head.querySelector('tr');
    title =Array.from(title.children)
    Array.prototype.shift.call(title)
    return title;
}

export default rowTitle;
