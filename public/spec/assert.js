var passedTests = 0;
var failedTests = 0;

var describe = (description, assertion) => {
  console.log(description);
  assertion();
  passedTests == 1 ? console.log("1 Test Has Passed") : console.log(`${passedTests} Tests Have Passed`)
  failedTests == 1 ? console.log("1 Test Has Failed") : console.log(`${failedTests} Tests Have Failed`)
  console.log("==========");
}

var assert = {
  isTrue: function (assertionToCheck) {

      if (!assertionToCheck) {
        console.log(`${assertionToCheck} is false`.toUpperCase());
        failedTests ++;
        // throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("==========");
        console.log(`${assertionToCheck} is true`);
        passedTests ++;
      }

  },

  isEqual: function (output, expectedOutput) {

    if (output == expectedOutput) {
      console.log("==========");
      console.log(`${output} is equal to ${expectedOutput}`);
      passedTests ++;
    } else {
      console.log(`${output} is not equal to ${expectedOutput}`.toUpperCase());
      failedTests ++;
      // throw new Error(`${output} and ${expectedOutput} are not equal`);
    }

  }
};
