var assert = require('assert');
var path = require('path')

import quickSort from '../src/Module_BoxPlot/quickSort';
import calcPlot from '../src/Module_BoxPlot/calcPlot'
// import boxPlot from '../src/Module_BoxPlot/boxPlot';
// import drawBox from '../src/Module_BoxPlot/drawBox';
// import drawBoxPlot from '../src/Module_BoxPlot/drawBoxPlot';

describe('Module Box Plot Testing', ()=> {
  // test array that has only one element
  describe('Quick Sort Test 1', ()=> {
    it('should return [1]', ()=> {
      assert.deepEqual(quickSort([1]), [1]);
    });
  });
  // test array that has more than one element
  describe('Quick Sort Test 2', ()=> {
    it('should return [0.5,1,1,52,55]', ()=> {
      assert.deepEqual(quickSort([1,52,0.5,55,1]), [0.5,1,1,52,55]);
    });
  });
  //test the data with even number length
  describe('Calc Test with data that has even number length', ()=>{
    it('use to calculate the box plot parameters, should return `{min:12, max:37, q1:18.5, q3:34.25,middle:26.5}`',
      ()=> {
      assert.deepEqual(calcPlot([17,15,34,19,20,23,25,28,36,33,12,35,30,37]),{
        min:12,
        max:37,
        q1:18.5,
        q3:34.25,
        middle:26.5});
    });
   });
   describe('Calc Test with data that has odd number length', ()=>{
     it('use to calculate the box plot parameters, should return `{min:12, max:37, q1:18.5, q3:34.25,middle:26.5}`',
       ()=> {
       assert.deepEqual(calcPlot([17,15,34,19,20,23,25,28,36,33,12,35,30,37]),
       {
         min:12,
         max:37,
         q1:18.5,
         q3:34.25,
         middle:26.5
       });
     });
    });
    describe('Calc Test with data that has odd number length', ()=>{
      it('use to calculate the box plot parameters, should return `{min:12, max:37, q1:18.5, q3:34.25,middle:26.5}`',
        ()=> {
        assert.deepEqual(calcPlot([17,2,34,19,20,23,25,28,36,33,35,90,37]),
        {
          min:2,
          max:59.5,
          q1:19.5,
          q3:35.5,
          middle:28
        });
      });
     });
});
