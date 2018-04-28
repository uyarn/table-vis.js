(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var tabular_vis=require('../src/tabular_vis');
tabular_vis.line(document.getElementsByTagName('tr')[1],'row')

},{"../src/tabular_vis":5}],2:[function(require,module,exports){
'use strict';

const rowBase = require('./rowBase');
const colBase = require('./colBase');


const base = (vis_cell,direction) => {
  // Base模块, 用于绑定元素的基本模块, 选择行元素或是列元素
  // base module, used to bind the table data cell, to choose either row or column
  let countCell;
  const directionList={
          'row':rowBase,
          'col':colBase
        }
  // 判断绑定的参数是否为dom元素
  //
  typeof vis_cell == "object"?(
      direction in directionList? countCell = directionList[direction](vis_cell)
                                :console.error('please type row or col as direction'))
                            :console.error("the cell bind doesn't come from DOM ");
  return countCell;
}
/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
    module.exports = base;
}

},{"./colBase":3,"./rowBase":4}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
'use strict';


const rowBase = (vis_cell)=>{
  if(typeof vis_cell=="object")
    return vis_cell.children;
  else
    console.error("the cell bind doesn't come from DOM ");
}

module.exports=rowBase;

},{}],5:[function(require,module,exports){
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

},{"./toLines/line":7}],6:[function(require,module,exports){

const drawLine=(data,focusCell)=>{

}

module.exports= drawLine;

},{}],7:[function(require,module,exports){
'use strict';
const base=require('../base/base.js');
const drawLine =require('./drawLine');
const line=function(val,direction){
  // 判断绑定的参数是否为dom元素
    let cell= base(val,direction);
    let cellData=[];
    for(let i =0;i<cell.length;i++){
      cellData.push(cell[i].innerHTML);
      cell[i].addEventListener('mouseover',()=>console.log(Array.prototype.indexOf.call(cell, cell[i])))
    }
}

/*!
 *  exports the module
 */
if(typeof module!== 'undefined' && module.exports){
  module.exports = line;
}

},{"../base/base.js":2,"./drawLine":6}]},{},[1]);
