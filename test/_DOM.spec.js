var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect

import className from 'className';
import SwapTableVis from '../src/_DOM/SwapTableVis';
import createIcon from '../src/_DOM/createIcon';
// import createTable from '../src/_DOM/createTabular';
// import createDrawBtnSets from '../src/_DOM/createDrawButton';


describe('_DOM Module Tests', ()=>{
    let ele,ctf,tab_con;
    jsdom();

    describe('1.className Module Test', ()=>{
      // addClass function branch 1
      it('addClass function testing',  ()=>{
        ele = document.createElement('div');
        ele = className.addClass(ele,'test')
        expect(ele.className).eql('test')
        });
        // addClass function branch 2
        it('addClass function testing',  ()=>{
          let ele2 = document.createElement('div');
          ele2 = className.addClass(ele2,'test')
          ele2 = className.addClass(ele2,'test2')
          expect(ele2.className).eql('test test2')
          });
      // removeClass function
      it('removeClass function testing',  ()=>{
        className.removeClass(ele,'test')
        expect(ele.className).eql('')
        });
     });

     describe('2.swapTabularVis Module Tests', ()=>{
       // branch 1 , should return true
       it('should return true',()=>{
         ctf = document.createElement('div');
         ctf.style.width='0px'
         tab_con = document.createElement('div');
         tab_con.setAttribute('class','tabular_container');
         ctf.appendChild(tab_con);
         expect(SwapTableVis(false,ctf)).eql(true);
       })
       // branch 2 , should return false
       it('should return false',()=>{
         ctf.style.width='300px'
         expect(SwapTableVis(true,ctf)).eql(false);
       })
       // branch 3 , should return true
       it('should return false',()=>{
         expect(SwapTableVis(true,ctf)).eql(true);
       })
     })

     describe('3.createIcon Module Tests', ()=>{
       // branch 1 , should return true
       it('should return the length of icon list, should be 3',()=>{
         expect(createIcon().length).eql(6);
       })
     })

     // describe('4.createDrawButton Module Tests', ()=>{
     //   // branch 1 , should return true
     //   let table_vis={ data:{}}
     //
     //   it('should return the type of buttonContainer list, should be object HTMLButtonElement',()=>{
     //     let buttonContainer = createDrawButton(table_vis)
     //     expect(Object.prototype.toString.call(buttonContainer.firstElementChild)).eql('[object HTMLButtonElement]');
     //     expect(Object.prototype.toString.call(buttonContainer.children[1])).eql('[object HTMLButtonElement]');
     //     expect(Object.prototype.toString.call(buttonContainer.children[2])).eql('[object HTMLButtonElement]');
     //     expect(Object.prototype.toString.call(buttonContainer.children[3])).eql('[object HTMLButtonElement]');
     //     expect(Object.prototype.toString.call(buttonContainer.children[4])).eql('[object HTMLButtonElement]');
     //
     //   })
     // })
     //
     // describe('4.createTabular Module Tests', ()=>{
     //   // branch 1 , should return true
     //   let table_vis={ data:{}}
     //
     //   it('should return the type of buttonContainer list, should be object HTMLButtonElement',()=>{
     //     expect(Object.prototype.toString.call(createTabular(table_vis))).eql('[object HTMLDivElement]');
     //
     //   })
     // })

});
