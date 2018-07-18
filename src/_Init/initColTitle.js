'use strict';

const colTitle = (table) => {
      let tbody = table.querySelector('tbody');
      let selectArr  = Array.from(tbody.children);
      let tdArr = [];
      let title =[];
      selectArr.forEach(d =>{
        while(d.children[0])
          {
            d = d.children[0] }
        title.push(d.innerHTML)
      })
      return title;
}

export default colTitle;
