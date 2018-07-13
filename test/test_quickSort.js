var assert = require('assert');
import quickSort from '../src/Module_BoxPlot/quickSort'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(quickSort([1,12,3]), [1,3,12]);
    });
  });
});
