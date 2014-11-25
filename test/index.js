var ceil = require('../');
var assert = require('assert');

describe('ceil', function() {
  it('should work with one param', function () {
    assert.equal(100, ceil(99.6));
    assert.equal(100, ceil(99.3));
    assert.equal(-123, ceil(-123.4));
  });

  it('should ceil with two params', function(){
    assert.equal(55.6, ceil(55.51, -1));
    assert.equal(60, ceil(51, 1));
    assert.equal(-55.5, ceil(-55.59, -1));
    assert.equal(-50, ceil(-59, 1));

    assert.equal(100000, ceil(12489.9482, 5));
    assert.equal(20000, ceil(12489.9482, 4));
    assert.equal(13000, ceil(12489.9482, 3));
    assert.equal(12500, ceil(12489.9482, 2));
    assert.equal(12490, ceil(12489.9482, 1));
    assert.equal(12490, ceil(12489.9482, 0));
  });
});
