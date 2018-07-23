let assert = require('assert');
let jsdom = require('mocha-jsdom');
let expect = require('chai').expect
let createCanvas = require('canvas');
import canvasBase from '../src/_Canvas/canvasBase'

import barStyle from '../src/Module_Bar/barStyle'
import drawBarRect from '../src/Module_Bar/drawBarRect'

let canvas = new createCanvas(200, 200);
let rectStyle ;

describe('Module_Bar Tests',()=>{

       jsdom();
      // barStyle test;
      describe('1. barStyle function test',()=>{

        it('should return `object CanvasGradient` ',()=>{
          let ctx = canvas.getContext('2d')
          rectStyle = barStyle(ctx)
          expect(Object.prototype.toString.call(...rectStyle)).eql('[object CanvasGradient]')
        })

      })
      // drawBarRect function testing branch 1
      describe('2. drawBarRect function test',()=>{

        it('should return 14px Arial and #ffffff',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawBarRect(ctx,[],[1,10,30,12,55],300,300,scale,rectStyle,2,['t','t','t','t','t'])
          expect(ctx.font).eql('14px Arial')
          expect(ctx.fillStyle).eql('#ffffff')
        })

      })
      // drawBarRect function testing branch 2
      describe('2. drawBarRect function test',()=>{

        it('should return  14px Arial and #ffffff',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawBarRect(ctx,[],['m','k'],300,300,scale,rectStyle,2,['t','q'],[[0,1],[2,3,4]])
          expect(ctx.font).eql('14px Arial')
          expect(ctx.fillStyle).eql('#ffffff')
        })

      })

})
