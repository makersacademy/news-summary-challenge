var assert = {
  isTrue: function(assertionToCheck, test) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + test + " is not truthy");
    } else {
      console.log(`%c ${test} passed!`, 'background: #222; color: #bada55');
    }
  }
};
