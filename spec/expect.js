'use strict';

var expect = {
  toEqual: function(testDescription, actualResult, expectedResult) {
    if (actualResult !== expectedResult) {
      throw new Error(testDescription + " failed: " + actualResult + " does not match " + expectedResult + ".");
    } else {
      console.log(testDescription);
    }
  },

  toRaiseError: function(testDescription, callback, expectedError){
    try{
      callback();
      throw new Error("No error received");
    } catch (error){
      this.toEqual(testDescription, error.message, expectedError)
    }

  }
};
