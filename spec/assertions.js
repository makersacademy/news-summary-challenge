'use strict'

var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        } else {
          return "true";
        }
    },

    isFalse: function(assertionToCheck) {
        if (assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is truthy");
        } else {
          return "true";
        }
    },

    returns: function(methodCall, expectedResult) {
      if(methodCall !== expectedResult) {
        throw new Error(methodCall + "does not return" + expectedResult)
      } else {
        return "true";
      }
    },
};
