(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck, testName) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + testName + " is not true");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    }
  };
  exports.assert = assert;
})(this);
