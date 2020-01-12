var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('.');
    }
  },

  isFalse: function(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    } else {
      console.log('.');
    }
  },

  eq: function(expected, actual) {
    if (expected !== actual) {
      throw new Error("Assertion failed: expected " + expected + ", but returned " + actual);
    } else {
      console.log('.');
    }
  },

  toInclude: function(item, array) {
    if (!array.includes(item)) {
      throw new Error("Assertion failed: " + item + " is not included");
    } else {
      console.log('.');
    }
  }

};
