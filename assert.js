var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("TEST FAILED: " + assertionToCheck + " IS NOT TRUE");
    }
  }
};