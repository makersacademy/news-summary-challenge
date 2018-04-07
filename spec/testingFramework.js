(function(exports) {
  var PASS_INDICATOR = '.';
  var FAIL_INDICATOR = 'F';

  function expect(thing) {
    return {
      toEqual: function(value) {
        return _checkAssert(value === thing);
      },
      toMatchArray: function(array) {
        return _checkAssert(this.isTypeArray(array) && this.isSameLength(array) && this.arrayContentsMatch(array));
      },
      toNotEqual: function(value) {
        return _checkAssert(value !== thing);
      },
      isTypeString: function(string) {
        return _checkAssert(typeof string === 'string');
      },
      isTypeArray: function(array) {
        return (array instanceof Array);
      },
      isSameLength: function(array) {
        return (array.length === thing.length);
      },
      arrayContentsMatch: function(array) {
        for (var i = array.length; i--;) {
          if (array[i] !== thing[i]) {
            return false;
          };
          return true;
        };
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
