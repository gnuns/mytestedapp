const assert = require('chai').assert;

describe('CalcService', function() {
  describe('#sum', function() {
    it('should return 0 for a=-2 and b=2', function(done) {
      assert.equal(CalcService.sum(-2, 2), 0);
      done();
    });
    it('should return 5 for a=8 and b=-3', function(done) {
      assert.equal(CalcService.sum(8, -3), 5);
      done();
    });
    it('should return 82 for a=0 and b=82', function(done) {
      assert.equal(CalcService.sum(0, 82), 82);
      done();
    });
  });
});
