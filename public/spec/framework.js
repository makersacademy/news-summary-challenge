"use strict";

  function expect(actual){
    return {

      toEqual: function(expected) {
        if (actual == expected) {
          console.log("Pass")
        }else {
          console.log("Fail")
        }  
      },

      ToBeAnArray: function(){
        if(actual.constructor.name === "Array"){
          console.log("Pass")
        }else {
          console.log("Fail")
        }
      }
    }
  }

  function it(label,callback) {
    console.log(`Test: ${label}`)
    callback()
  };

  function describe(label, callback){
    console.log(`- ${label} -`)
    callback()
  };
