(function (exports) {
  function assert (that, assertion) {
    if (assertion) {
      return "PASSED: " + that;
    } else {
      return "FAILED: " + that;
    }
  }
  exports.assert = assert;
}(this));

(function (exports) {
  function describe(description, assertion) {
    console.log("");
    console.log(description + " >>>");

    for (var assertionIndex = 1; assertionIndex < arguments.length; assertionIndex++) {
      console.log("   " + arguments[assertionIndex]);
    }
  }
  exports.describe = describe;
})(this);
