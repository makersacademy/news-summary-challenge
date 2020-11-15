"use strict";

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

function expect(actual){
  return {
    toEqual: function(expected){
      if(actual === expected){
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
    },
    toBeAnInstanceOf: function(expected){
      if(actual instanceof expected) {
        console.log("Pass")
      }else {
        console.log("Fail")
      }
    }
  }
}