'use strict';

const colTitle = (table) => {
      let tbody = table.querySelector('tbody');
      let selectArr  = tbody.children;
      let tdArr = [];
      let title =[];
      for (let i =0; i<selectArr.length;i++)
            title.push(selectArr[i].children[0])
      return title;
}

export default colTitle;
