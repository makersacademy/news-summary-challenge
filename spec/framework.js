"use strict";
(function(exports){
  function describe(label, callback){
    console.log(`Test: ${label}`)
    callback()
  }
  function it(label, callback) { 
    console.log(`Test: ${label}`)
    callback()
  }
  function expect(actual) {
    return {
      toEqual: function(expected){
        if (actual == expected) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      },
      toEqual: function(expected){
        if (actual === expected) {
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
      },
      toBeAString: function() {
        if (actual.constructor.name === "String") {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }
    }
  }

  exports.it = it
  exports.expect = expect
  exports.describe = describe
})(this)
