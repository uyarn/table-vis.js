'use strict';

import './tbody.css';
import className from '../_DOM/className';

let tBody;
const initTable=function(table){
    tBody = table.querySelector('tbody');
    className.addClass(tBody,'vis_tbody');
}

export default initTable;
