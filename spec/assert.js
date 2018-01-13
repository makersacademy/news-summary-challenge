var assert = {
  isTrue: function(assertionToCheck, testName){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + testName + " is not working");
    } else {
      console.log(testName + " is passing");
    }
  }
};
