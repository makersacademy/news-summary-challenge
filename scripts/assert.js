const assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(
        "Assertion failed: " + assertionToCheck + " is not truthy"
      );
    }
  },
  toEqual: function (assertionToCheck, val) {
    if (assertionToCheck != val) {
      throw new Error(
        "Assertion failed: " + assertionToCheck + " is not equal"
      );
    }
  },
};
