var assert = require('assert');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect

import className from 'className';
import createIcon from '../src/_DOM/createIcon';
import createTabular from '../src/_DOM/createTabular';
import createDrawButton from '../src/_DOM/createDrawButton';
import SwapTabularVis from '../src/_DOM/SwapTabularVis';


describe('_DOM Module Tests', ()=>{
    let ele;
    jsdom();

    describe('1.className Module Test', ()=>{
      // addClass function
      it('addClass function testing',  ()=>{
        ele = document.createElement('div');
        ele = className.addClass(ele,'test')
        expect(ele.className).eql('test')
        });
      // removeClass function
      it('removeClass function testing',  ()=>{
        className.removeClass(ele,'test')
        expect(ele.className).eql('')
        });
     });

});
