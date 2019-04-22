var assert = {
  isTrue: function(desc = "DESCRIPTION", assertionToCheck) {
    if (!assertionToCheck) {
      console.log("%c " + desc + ": Assertion failed - " + assertionToCheck + " response to test", 'color: red');
    } else {
      console.log("%c " + desc + ": Assertion passed", 'color: green');
    }
  },

  isEqual: function(desc = "DESCRIPTION", valueToCheck, expectedValue) {
    if (valueToCheck !== expectedValue) {
      console.log("%c " + desc + ": Assertion failed. " + valueToCheck + " is not equal to " + expectedValue, 'color: red');
    } else {
      console.log("%c " + desc + ": Assertion passed - " + valueToCheck + " is equal to " + expectedValue, 'color: green');
    }
  },

  isNotEqual: function(desc = "DESCRIPTION", valueToCheck, expectedValue) {
    if (valueToCheck === expectedValue) {
      console.log("%c " + desc + ": Assertion failed. " + valueToCheck + " is equal to " + expectedValue, 'color: red');
    } else {
      console.log("%c " + desc + ": Assertion passed - " + valueToCheck + " is not equal to " + expectedValue, 'color: green');
    }
  },
};
