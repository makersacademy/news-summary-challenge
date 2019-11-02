var assert = {
  isTrue: function(assertionToCheck, testname) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + testname + " is not truthy")
    }
  }
};
