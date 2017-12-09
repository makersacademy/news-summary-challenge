var assert = {
  isTrue: function(assertionToCheck) {
      if(!assertionToCheck) {
        return("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        return ("Assertion passed: " + assertionToCheck + " is truthy")
      }
  }
};
