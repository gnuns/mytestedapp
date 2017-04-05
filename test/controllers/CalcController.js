const assert = require('chai').assert;
const supertest = require('supertest');

describe('CalcController', function() {
  describe('#sum', function() {
    it('should return status code 400 (badRequest) when a and b are set', function(done) {
      supertest(sails.hooks.http.app)
      .get('/calc/sum')
      .end(function (err, res) {
        if (err) assert.fail(err.message);
        assert.equal(res.status, 400);
        done();
      });
    });
    it('should return status code 200 (ok) when a and b are set', function(done) {
      supertest(sails.hooks.http.app)
      .get('/calc/sum?a=1&b=15')
      .end(function (err, res) {
        if (err) assert.fail(err.message);
        assert.equal(res.status, 200);
        done();
      });
    });
  });
});
