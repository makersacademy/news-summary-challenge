'use strict';

//module pattern
(function(exports) {
  //the 'it' label
  function it(desc, callback) {
    try {
      callback();
      console.log(`Test: ${desc}`)
      console.log(`Passed`)
    } catch(error) {
      console.log('\n')
      console.log(`Test: ${desc}...`)
      console.log('Failed!')
      console.error(error);
    }
  }
  //the 'expect' label
  function expect(a) {
    return {
      toEqual: function(b) {
        if (a!==b) {
          throw `${a} - DOES NOT EQUAL: ${b}`
        }
      },
      toBeAnArray: function() {
        if (!(a.list instanceof Array)) {
          throw `${a} is not an array`
        }
      }
    }
  }

  function double(doubleName) {
    Object.entries(arguments[1]).forEach(([key, val]) => arguments[1][key] = function() {
        return val;
    });

    return arguments[1];
  }

  exports.it = it;
  exports.expect = expect;
  exports.double = double;

})(this);
