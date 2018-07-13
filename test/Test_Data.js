var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect

import numericalData from '../src/_Data/numericalData'
import cateData from '../src/_Data/cateData'
// import colData from '../src/_Data/colData'
import regData from '../src/_Data/regData'
// import rowData from '../src/_Data/rowData'

describe('_Data Module Tests', ()=>{

  describe('Numerical Data Test', ()=>{

  jsdom()

  it('numerical data extract function test',  ()=>{

    var tdArr = [],thArr= [],totalArr=[]
    for(let i=0;i<50;i++){
      var td = document.createElement('td');
      var th = document.createElement('th');
      td.innerHTML=i;
      th.innerHTML='title'+i;
      tdArr.push(td);
      thArr.push(th);
    }
    totalArr.push(tdArr)
    totalArr.push(thArr)
    expect(numericalData(totalArr,[],[])).eql('DIV')
  })
});
})
