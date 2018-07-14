var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect

import numericalData from '../src/_Data/numericalData'
import cateData from '../src/_Data/cateData'
import colData from '../src/_Data/colData'
import regData from '../src/_Data/regData'
import rowData from '../src/_Data/rowData'

describe('_Data Module Tests', ()=>{
  // 1.numericalData module testing
  var tdArr = [],thArr= [],totalArr=[],arr=[],tr,tbody,table
  describe('1.Numerical Data Test', ()=>{

    jsdom()
    it('numerical data extract function test',  ()=>{
      for(let i=0;i<10;i++){
        var td = document.createElement('td');
        var th = document.createElement('th');
        td.innerHTML=i;
        th.innerHTML='title'+i;
        tdArr.push(td);
        thArr.push(th);
      }
     totalArr.push(tdArr)
     totalArr.push(thArr)
     expect(numericalData(totalArr,[],[])).eql(
      {
        data:["0","1","2","3","4","5","6","7","8","9"],
        title:["title0","title1","title2","title3","title4","title5","title6","title7","title8","title9"]
      })
    })
  });

  // 2.categoryData module testing
  describe('2.cateData Test', ()=>{

    jsdom()
    it('category data extract function test',  ()=>{
      for(let i=0;i<10;i++){
        let td = document.createElement('td');
        td.innerHTML='cate_'.concat(i%2!=0?'two':'one')
        arr.push(td);
      }
     expect(cateData(arr,[],[])).eql(
      {
        data:[5,5],
        title:["cate_one","cate_two"],
        titleIdx:[[0,2,4,6,8],[1,3,5,7,9]]
      })
    })
  });

  // 3.categoryData module testing
  describe('3.regData Test', ()=>{

    jsdom()
    // categoryData module testing of numerical branch 1
    it('reg data function test of numerical Data',  ()=>{
     expect(regData(totalArr,0)).eql(
      {
        data:["0","1","2","3","4","5","6","7","8","9"],
        title:["title0","title1","title2","title3","title4","title5","title6","title7","title8","title9"]
      })
    })
    // categoryData module testing of category branch 1
    it('reg data function test of category Data',  ()=>{
     expect(regData([arr,thArr],0)).eql(
      {
        data:[5,5],
        title:["cate_one","cate_two"],
        titleIdx:[[0,2,4,6,8],[1,3,5,7,9]]
      })
    })
    // categoryData module testing of category branch 2
    it('reg data function test of category Data',  ()=>{
     expect(regData([arr,thArr],1)).eql(
      {
        data:[5,5],
        title:["cate_one","cate_two"],
        titleIdx:[[0,2,4,6,8],[1,3,5,7,9]]
      })
    })
  });
 // rowData module testing
 describe('4.rowData Test', ()=>{
   jsdom();
   it('rowData function test',  ()=>{
    tr = document.createElement('tr');
    arr.forEach(function(d){
      tr.appendChild(d)
    });
    expect(rowData(arr[2],thArr,0)).eql(
     {
       data:[5,4],
       title:["cate_two","cate_one",],
       index:1,
       titleIdx:[[0,2,4,6,8],[1,3,5,7]]

     })
   })
  });
  // colData module testing
  describe('4.colData Test', ()=>{
    jsdom();
    it('colData function test',  ()=>{
     tbody = document.createElement('tbody');
     let tr2 =tr;
     tbody.appendChild(tr)
     expect(colData(arr[2],thArr,0)).eql(
      {
        data:[1],
        title:["cate_one"],
        index:0,
        titleIdx:[[0]]

      })
    })
   });

})
