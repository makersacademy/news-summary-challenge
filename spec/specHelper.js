(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: is not true");
      } else {
        console.log("  Imagine this text is green: test has passed");
      }
    }
  };
  exports.assert = assert;
})(this);
