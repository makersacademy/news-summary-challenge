var assert = {
  isTrue: function(testName, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(testName + " failed");
    }
    else {
      console.log(testName + " passes!");
    }
  }
};
