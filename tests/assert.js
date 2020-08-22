(function(exports) {
  const assert = {
    isTrue: function(assertionToCheck, testName) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      console.log(testName + ": Passed");
    }
  };
  exports.assert = assert;
})(this);