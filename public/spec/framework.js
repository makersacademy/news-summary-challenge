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

  it('2 + 2 is equal to 4', function(){
    expect(2+2).toEqual(4)
  });