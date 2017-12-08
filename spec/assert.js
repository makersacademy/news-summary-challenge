var assert = {
  isTrue: function(describe, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      (console.log(describe))
    }
  },
  isEqual: function(describe, value1, value2) {
    if (value1 === value2) {
      (console.log(describe));
    } else {
      throw new Error ("Assertion failed: " + value1  + ' ' + value2 + " are not equal");
    }
  }
};
