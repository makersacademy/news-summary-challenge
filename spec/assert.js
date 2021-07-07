var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Assertion passed: " + assertionToCheck + " is true")
    }
  },
  toBeEqual: function toBeEqual(test, expectation) {
    return function(){
      if (test === expectation) {
        console.log("Assertion passed: " + test + " = " + expectation)
      } else {
        throw new Error("Expected " + test + " to equal " + expectation);
      };
    };
  }
};
