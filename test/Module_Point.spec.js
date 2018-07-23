let assert = require('assert');
let jsdom = require('mocha-jsdom');
let expect = require('chai').expect
let createCanvas = require('canvas');
import canvasBase from '../src/_Canvas/canvasBase'

import pointStyle from '../src/Module_Point/pointStyle'
import drawPointCol from '../src/Module_Point/drawPointCol'

let canvas = new createCanvas(200, 200);
let rectStyle ;

describe('Module_Bar Tests',()=>{

       jsdom();
      // pointStyle test;
      describe('1. pointStyle function test',()=>{

        it('should return `object CanvasGradient` ',()=>{
          let ctx = canvas.getContext('2d')
          rectStyle = pointStyle(ctx)
          expect(Object.prototype.toString.call(...rectStyle)).eql('[object CanvasGradient]')
        })

      })
      // drawPointCol function testing branch 1
      describe('2. drawPointCol function test',()=>{

        it('should return 10px sans-serif and #ffffff',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawPointCol(ctx,[],[1,10,30,12,55],300,300,scale,rectStyle,2,['t','t','t','t','t'])
          expect(ctx.font).eql('10px sans-serif')
          expect(ctx.fillStyle).eql('#ffffff')
        })

      })
      // drawPointCol function testing branch 2
      describe('2. drawPointCol function test',()=>{

        it('should return 10px sans-serif and #ffffff',()=>{
          let ctx = canvas.getContext('2d')
          let scale =canvasBase.setScale(300,[1,10,30,12,55])
          ctx = drawPointCol(ctx,[],['m','k'],300,300,scale,rectStyle,2,['t','q'],[[0,1],[2,3,4]])
          expect(ctx.font).eql('10px sans-serif')
          expect(ctx.fillStyle).eql('#ffffff')
        })

      })

})
