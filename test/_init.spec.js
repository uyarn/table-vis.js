var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect

import initHead from '../src/_init/initHead'
import colTitle from '../src/_init/initColTitle'
import rowTitle from '../src/_init/initRowTitle'

describe('_Init Module Tests',function(){
  let table,tbody,thead,tr
  jsdom();
  //
  describe('1. _colTitle Module Tests',function(){

  it('should be cate_one', function() {
    table = document.createElement('table');
    thead = document.createElement('thead');
    tbody = document.createElement('tbody');
    let tr =document.createElement('tr');
    for(let i=0;i<10;i++){
      let td = document.createElement('td');
      td.innerHTML='cate_'.concat(i%2!=0?'two':'one')
      tr.appendChild(td)
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    tbody.appendChild(tr)
    expect(colTitle(table)[0].innerHTML).eql('cate_one');
  });
  });
  describe('2. _colTitle Module Tests',function(){

  it('should be cate_one', function() {
    let tr2 =document.createElement('tr');
    for(let i=0;i<5;i++){
      let td = document.createElement('td');
      td.innerHTML='title'.concat(i)
      tr2.appendChild(td)
    }
    thead.appendChild(tr2)
    let title = rowTitle(table)
    expect(title[0].innerHTML).eql('title1');
    expect(title[1].innerHTML).eql('title2');
    expect(title[2].innerHTML).eql('title3');
    expect(title[3].innerHTML).eql('title4');

  });
  });

  describe('3. _initHead Module Tests',function(){
  let tcf;
  it('should equal content', function() {
    tcf =document.createElement('div');
    let h3 = initHead(tcf,'content');
    expect(Object.prototype.toString.call(h3)).eql('[object HTMLHeadingElement]')
    expect(h3.innerHTML).eql('content')
  });
  it('should equal content', function() {
    tcf =document.createElement('div');
    tcf.appendChild(document.createElement('h3'))
    let h3 = initHead(tcf,'transferHead');
    expect(h3.innerHTML).eql('transferHead')
  });
  });
})
