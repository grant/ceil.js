var decimalAdjust = require('decimal-adjust');

var ceil = function(value, exp) {
  return decimalAdjust('ceil', value, exp);
};

module.exports = ceil;