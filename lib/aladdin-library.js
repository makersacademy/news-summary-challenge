'use strict';

(function(exports) {
  
  function expect(actual) {

    var passed = ('     ---> Passed! 🧞‍♂️')
    var failed = ('     ---> Failed! 😭 ❌ 🤬')

    return {
    
    toBeTrue: function() {
      if (!actual) {
        testResult(failed);
        console.log(`Failed: ${actual} is not truthy 😭. Check the console for more information.`);
      } else {
        testResult(passed);
      };
    }, 
    
    toBeFalse: function() {
      if (actual) {
        testResult(failed);
        console.log(`Failed: ${actual} is not falsy 😭. Check the console for more information.`);
      } else {
        testResult(passed);
      };
    }, 
    
    toEqual: function(expected) {
      if (actual == expected) {
        testResult(passed);
      } else {
        testResult(failed);
        console.log(`Failed: "${actual}" is not equal to ${expected} 😭. Check the console for more information.`);
        };
      }, 
    
    toNotEqual: function(expected) {
      if (actual != expected) {
        testResult(passed);
      } else {
        testResult(failed);
        console.log(`Failed: ${actual} is equal to ${expected} 😭. Check the console for more information.`);
        };
      }

    };
  };

    function it(label, callback) {
      testDescription(`Test: ${label}`)
      callback()
    };

    function describe(thingBeingDescribed, assertion) {
      testTitle(`${thingBeingDescribed}:`);
      assertion();
    };


    exports.describe = describe;
    exports.it = it;
    exports.expect = expect;


  })(this);
