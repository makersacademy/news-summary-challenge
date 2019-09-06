'use strict'

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck);
    }
    else {
      console.log("Assertion passed: " + assertionToCheck);

    }
  }


};
