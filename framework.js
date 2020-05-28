"use strict";
(function(exports){
  function expect(actual) {
    return {
      toEqual: function(expected){
        if (actual == expected) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      },
      toBeAnArray: function(){
        if (actual.constructor.name === "Arrays") {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }
    }
  }
  function it(label, callback) { 
    console.log(`Test: ${label}`)
    callback()
  }
  exports.it = it
  exports.expect = expect
})(this)
