(function(exports) {
  var PASS_INDICATOR = '.';
  var FAIL_INDICATOR = 'F';

  function expect(thing) {
    return {
      toEqual: function(value) {
        return _checkAssert(value === thing);
      },
      toNotEqual: function(value) {
        return _checkAssert(value !== thing);
      },
      isTypeString: function(string) {
        return _checkAssert(typeof string === 'string');
      },
      isTypeArray: function(array) {
        return _checkAssert(array instanceof Array);
      },
      isSameLength: function(array) {
        return _checkAssert(array.length === thing.length);
      }
    };
  };

  function _checkAssert(argument) {
    return (argument) ? PASS_INDICATOR : FAIL_INDICATOR;
  }

  function describe(string, callback) {
    console.log(string);
    callback();
  }

  function it(string, callback) {
    if(callback() === PASS_INDICATOR) {
      console.log(`%c ${string}\n ${callback()}`, 'color: green');
        } else {
      console.log(`%c ${string}\n ${callback()}`, 'color: red');
    }
  }

  exports.expect = expect;
  exports.describe = describe;
  exports.it = it;
})(this);
