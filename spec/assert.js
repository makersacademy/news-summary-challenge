(function (exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        console.error("Assertion failed: Assertion is " + assertionToCheck); 
      } else {
        console.log("Everything's fine!\n\n");
      }
    }
  };
  exports.assert = assert;
})(this);
