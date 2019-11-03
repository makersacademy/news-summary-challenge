var assert = {
  isTrue: function(testName, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(`${testName} - failed: Expected truthy, got ${assertionToCheck}`);
    }
    else {
      console.log(`${testName} - Passed: ${assertionToCheck}`)
    }
  }
};