let fail = "<p style='color: red;'>Test Failed</p>";
let pass = "<p style='color: green;'>Test Passed</p>";

  const assert = {
    isString: function(assertionToCheck) {
      if (typeof assertionToCheck !== 'string') {
        document.write(fail);
        throw new Error("Assertation failed: " + assertionToCheck + " is not a string");
      } else {
        document.write(pass);
    }
    },
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        document.write(fail);
        throw new Error("Assertion failed " + assertionToCheck + " is not true");
      } else {
        document.write(pass);
      }
    },
    isError: function(assertionToCheck) {
      if (!(assertionToCheck instanceof Error)) {
        document.write(fail);
      } else {
        document.write(pass);
      }
    }
}
