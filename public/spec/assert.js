var passedTests = 0;
var failedTests = 0;

var describe = (description, assertion) => {
  console.log(description);
  assertion();
}

var it = (description, assertion) => {
  console.log(description);
  assertion();
  passedTests == 1 ? console.log("%c1 Test Has Passed", 'color: rgb(34,139,34); background-color: rgba(34,139,34,0.1)') : console.log(`%c${passedTests} Tests Have Passed`, 'color: rgb(34,139,34); background-color: rgba(34,139,34,0.1)')
  if(failedTests > 0){
    failedTests == 1 ? console.log("%c1 Test Has Failed", 'color: rgb(255,0,0); background-color: rgba(255,0,0,0.1)') : console.log(`%c${failedTests} Tests Have Failed`, 'color: rgb(255,0,0); background-color: rgba(255,0,0,0.1)')
  }
}

var assert = {
  isTrue: function (assertionToCheck) {

      if (!assertionToCheck) {
        console.log(`%c${assertionToCheck}`, 'color: rgb(255,0,0); background-color: rgba(255,0,0,0.1)');
        failedTests ++;
        // throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log(`%c${assertionToCheck}`, 'color: rgb(34,139,34); background-color: rgba(34,139,34,0.1)');
        passedTests ++;
      }

  },

  isEqual: function (output, expectedOutput) {

    if (output == expectedOutput) {
      console.log(`%c${output} is equal to ${expectedOutput}`, 'color: rgb(34,139,34); background-color: rgba(34,139,34,0.1)');
      passedTests ++;
    } else {
      console.log(`%c${output} is not equal to ${expectedOutput}`, 'color: rgb(255,0,0); background-color: rgba(255,0,0,0.1)');
      failedTests ++;
      // throw new Error(`${output} and ${expectedOutput} are not equal`);
    }

  }
};
