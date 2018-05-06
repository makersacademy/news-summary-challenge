var assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + description + " is not truthy");
    } else {
      console.log(description + "Your tests passed");
    }
  }
};
