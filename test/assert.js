var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("%c Your tests have passed", "color: green" )
    }
  },

  isFalse: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not Falsy");
    } else {
      console.log("%c Your tests have passed", "color: green" )
    }
  }
};