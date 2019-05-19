var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(
        "assertion failed: " + assertionToCheck + " is not truthy"
      );
    } else {
      ("Test passed");
    }
  },

  isArray: function(assertionToCheck) {
    if (!Array.isArray(assertionToCheck)) {
      throw new Error(
        "assertion failed: " + assertionToCheck + " is not an Array"
      );
    } else {
      ("Test passed");
    }
  },

  contains: function(assertionOne, assertionTwo) {
    if (!assertionOne.includes(assertionTwo)) {
      throw new Error(`${assertionOne} does not contain ${assertionTwo}`);
    } else {
      ("Test passed");
    }
  }
};
