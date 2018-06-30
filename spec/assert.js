var assert = {
  isTrue: function(testName, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(testName + " test failed");
    }
    else {
      console.log(testName + " test passes!");
    }
  }
};
