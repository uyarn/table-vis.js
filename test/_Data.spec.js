let assert = require('assert');
let jsdom = require('mocha-jsdom');
let expect = require('chai').expect

import numericalData from '../src/_Data/numericalData'
import cateData from '../src/_Data/cateData'
import colData from '../src/_Data/colData'
import regData from '../src/_Data/regData'
import rowData from '../src/_Data/rowData'

describe('_Data Module Tests', ()=>{
  // 1.numericalData module testing
  let tdArr = [],thArr= [],totalArr=[],arr=[],tr,tbody,table
  describe('1.Numerical Data Test', ()=>{

    jsdom()
    // numerical test 1

    it('numerical data extract function test',  ()=>{
      for(let i=0;i<10;i++){
        let td = document.createElement('td');
        let th;
        td.innerHTML=i;
        th='title'+i;
        tdArr.push(td);
        thArr.push(th);
      }
     totalArr.push(tdArr)
     totalArr.push(thArr)
     expect(numericalData(totalArr,[],[],[])).eql(
      {
        data:["0","1","2","3","4","5","6","7","8","9"],
        oriData: ["0","1","2","3","4","5","6","7","8","9"],
        title:["title0","title1","title2","title3","title4","title5","title6","title7","title8","title9"]
      })
    })
    // number data test, fraction data branch
    it('numerical data extract function test ,fraction data branch,should return normal numerical data',  ()=>{
      let tdArr2=[], thArr2=[], totalArr2=[];
      for(let i=1;i<11;i++){
        let td = document.createElement('td');
        let th;
        td.innerHTML=i+'/'+2*i;
        th='title'+i;
        tdArr2.push(td);
        thArr2.push(th);
      }
     totalArr2.push(tdArr2)
     totalArr2.push(thArr2)
     expect(numericalData(totalArr2,[],[],[])).eql(
      {
        data:[1,1,1,1,1,1,1,1,1,1],
        oriData: ["1/2","2/4","3/6","4/8","5/10","6/12","7/14","8/16","9/18","10/20"],
        title:["title1","title2","title3","title4","title5","title6","title7","title8","title9","title10"]
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
     expect(cateData(arr,[],[],[])).eql(
      {
        data:[5,5],
        title:["cate_one","cate_two"],
        oriData: [],
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
        oriData: ["0","1","2","3","4","5","6","7","8","9"],
        title:["title0","title1","title2","title3","title4","title5","title6","title7","title8","title9"]
      })
    })
    // categoryData module testing of category branch 1
    it('reg data function test of category Data',  ()=>{
     expect(regData([arr,thArr],0)).eql(
      {
        data:[5,5],
        oriData: [],
        title:["cate_one","cate_two"],
        titleIdx:[[0,2,4,6,8],[1,3,5,7,9]]
      })
    })
    // categoryData module testing of category branch 2
    it('reg data function test of category Data',  ()=>{
     expect(regData([arr,thArr],1)).eql(
      {
        data:[5,5],
        oriData: [],
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
       oriData: [],
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
        oriData: [],
        index:0,
        titleIdx:[[0]]

      })
    })
   });

})
