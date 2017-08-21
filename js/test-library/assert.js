(function(exports){
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Expected:" + assertionToCheck + " to be true");
      }
    },

    isEqual: function(actual, expected) {
      if(actual !== expected) {
        throw new Error("Expected:" + actual + " to equal " + expected);
      }
    },

    toInclude: function(expected) {
      if(!this.includes(expected)) {
        throw new Error("Expected:" + actual + " to include" + expected);
      }
    }
  };
  exports.assert = assert;
})(this);
