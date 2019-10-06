var assert = {
  equals: function(object, expectation) {
    if (object !== expectation) {
      throw new Error("Assertion failed: " + object + " does not equal " + expectation);
    } else { console.log("Assertion passed: " + object + " equals " + expectation)}
  },

  isTypeOf: function(object, expectation) {
    if (object.constructor !== expectation) {
      throw new Error("Assertion failed: " + object + " is not a type of " + expectation);
    } else { console.log("Assertion passed: " + object + " is a type of " + expectation)}
  },

  arrIncludes: function(object, expectation) {
    if (!object.includes(expectation)) {
      throw new Error("Assertion failed: " + object + " does not include " + expectation);
    } else { console.log("Assertion passed: " + object + " includes " + expectation)}
  },

  arrDoesNotInclude: function(object, expectation) {
    if (object.includes(expectation)) {
      throw new Error("Assertion failed: " + object + " does include " + expectation);
    } else { console.log("Assertion passed: " + object + " does not include " + expectation)}
  }
};
