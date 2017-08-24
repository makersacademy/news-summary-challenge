(function(exports) {

  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("      Success");
      }
    }
  };

  var describe = function(description, test){
    console.log(description);
    test();
  };

  var it = function(description, test){
    console.log("   " + description);
    test();
  };

  exports.assert = assert;
  exports.describe = describe;
  exports.it = it;
})(this);
