var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      return "Assertion failed";
    } else { return "Assertion passed" }
  }
};
