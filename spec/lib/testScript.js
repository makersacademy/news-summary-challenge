var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + testName + " " + assertionToCheck + " is not truthy");
    }
    console.log(testName + " PASSED")

  }
};
