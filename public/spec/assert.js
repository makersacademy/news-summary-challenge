var passedTests = 0;

var describe = (description, assertion) => {
  console.log(description);
  assertion();
  console.log(`${passedTests} Tests Have Passed`)
  console.log("=====");
}

var assert = {
  isTrue: function (assertionToCheck) {

      if (!assertionToCheck) {
          throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("=====");
        console.log(`${assertionToCheck} is true`);
        passedTests ++;
      }

  },

  isEqual: function (output, expectedOutput) {

    if (output == expectedOutput) {
      console.log("=====");
      console.log(`${output} is equal to ${expectedOutput}`);
      passedTests ++;
    }
  }
};
