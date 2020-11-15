"use strict";

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

function expect(actual){
  return {
    toEqual: function(expectedValue){
      if(actual === expectedValue){
        console.log("Pass")
      }else {
        console.log("Fail")
      }
    },
    toBeAnArray: function(){
      if(Array.isArray(actual)){
        console.log("Pass")
      }else {
        console.log("Fail")
      }
    }
  }
}