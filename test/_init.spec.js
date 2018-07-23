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
    expect(colTitle(table)[0]).eql('cate_one');
  });

  });

  describe('2. _rowTitle Module Tests',function(){

  it('should return title`n`', function() {
    let tr2 =document.createElement('tr');
    for(let i=0;i<5;i++){
      let td = document.createElement('td');
      td.innerHTML='title'.concat(i)
      tr2.appendChild(td)
    }
    thead.appendChild(tr2)
    let title = rowTitle(table)
    expect(title[0]).eql('title1');
    expect(title[1]).eql('title2');
    expect(title[2]).eql('title3');
    expect(title[3]).eql('title4');

  });

  it('multiply title elements,should return title`n`', function() {
    let m_tr =document.createElement('tr');
    for(let i=0;i<5;i++){
      let m_td = document.createElement('td');
      let m_a = document.createElement('a');
      m_a.innerHTML='title'.concat(i)
      m_td.appendChild(m_a)
      m_tr.appendChild(m_td)
    }
    let m_table = document.createElement('table');
    let m_thead = document.createElement('thead');
    m_thead.appendChild(m_tr)
    m_table.appendChild(m_thead)
    let title = rowTitle(m_table)
    expect(title[0]).eql('title1');
    expect(title[1]).eql('title2');
    expect(title[2]).eql('title3');
    expect(title[3]).eql('title4');

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
