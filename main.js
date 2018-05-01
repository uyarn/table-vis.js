(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const base=(cell,direct)=>{
  // Base模块, 用于绑定元素的基本模块, 选择行元素或是列元素
  // base module, used to bind the table data cell, to choose either row or column
  let countCell;
  // 判断绑定的参数是否为dom元素
  if(direct=='row'){
       countCell=rowBase(cell);
       return countCell;
     }
     else{
       if(direct=='col'){
         countCell=colBase(cell);
         return countCell;
       }
       else
         console.error('please type row or col as direction');
     }
}
/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
    module.exports = base;
}

},{"./colBase":2,"./rowBase":3}],2:[function(require,module,exports){
'use strict';

const colBase = (vis_cell)=>{
  if(typeof vis_cell=="object")
    return vis_cell.children;
  else
    console.error("the cell bind doesn't come from DOM ");
}

if(typeof module !== 'undefined' && module.exports) {
  module.exports = colBase;
}

},{}],3:[function(require,module,exports){
'use strict';

const rowBase = (vis_cell)=>{
  if(typeof vis_cell=="object")
    return Array.from(vis_cell.children);
  else
    console.error("the cell bind doesn't come from DOM ");
}

module.exports= rowBase;

},{}],4:[function(require,module,exports){
'use strict';

const className={
  addClass:function(ele, name){
      // get the origin class name
      let originClassName = ele.className;
      // if it has class name , make a blank, else make nothing
      let addClassName = originClassName +((originClassName=="")?"":" ")+name;
      ele.className = addClassName;
      // callback(ele);
  },
  removeClass:function (ele,name){
      let originClassName =" "+ele.className+" ";
      originClassName = originClassName.replace(/(\s+)/gi, " ");
      // remove the class name
      let removedName = originClassName.replace(" "+name+" ", " ");
      // remove the useless space
      removedSpace = removedName.replace(/(^\s+)|(\s+$)/g, "");
      ele.className = removedSpace;
  }
}
module.exports=className;

},{}],5:[function(require,module,exports){
'use strict';

const insertCss=()=>{
  let css = ".tabular-vis-diagram::after{content:' ';width:100px;height: 100px;background: #f00;}";
  let headElement = document.head || document.getElementsByTagName('head')[0];
  let style = document.createElement('style');
    style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  }
  else {
    style.appendChild(document.createTextNode(css));
  }
  headElement.appendChild(style);
  console.log('Insert css done')

}

module.exports=insertCss;

},{}],6:[function(require,module,exports){
'use strict';
const line = require('./toLines/line');
const tabular_vis={
    line:line
}
/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && typeof exports === `object`){
    module.exports = tabular_vis;
}

},{"./toLines/line":8}],7:[function(require,module,exports){
'use strict';
// const d3 = require('d3');


function drawLine(cell,data,focusCell){
   // callback className
   //className.addClass(focusCell,'tabular-vis-diagram');
}

module.exports= drawLine;

},{}],8:[function(require,module,exports){
'use strict';

const base=require('../base/base');
const drawLine =require('./drawLine');
const insertCss = require('../dom/insertCss');
const className = require('../dom/className');

const line=(val,direction)=>{
  // 判断绑定的参数是否为dom元素
    let cell= base(val,direction);
    let cellData=[];
    // to insert the diagram css style
    insertCss();
    for(let i =0;i<cell.length;i++){
      cellData.push(cell[i].innerHTML);
      // use the indexOf method of Array to get the postion of each cell
      let cellIndex=Array.prototype.indexOf.call(cell,cell[i]);
      cell[i].addEventListener('mouseover',
        (event)=>{

          let e=event||window.event;
          console.log(e.clientY)
          //className.addClass(cell[i],'tabular-vis-diagram');
          //drawLine(cell,cellData)
        },true)
    }
}
/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = line;
}

},{"../base/base":1,"../dom/className":4,"../dom/insertCss":5,"./drawLine":7}]},{},[6]);
