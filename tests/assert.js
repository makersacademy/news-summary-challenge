var assert = {
  isInstanceOf: function(expected, actual) {
    if (!(actual instanceof expected)) {
      try {
        throw new Error("Assertion failed: " + (typeof actual) + " is not an instance of " + expected.name);
      } catch (e) {
        var stack = e.stack;
        console.log(stack);
      }
    } else {
      console.log("Passed: " + (typeof actual) + " is an instance of " + expected.name)
    }
  },
  isEqual: function(expected, actual) {
    if (!(expected == actual)) {
      try {
        throw new Error("Failed " + expected + " is not equal to " + actual)
      } catch (e) {
        var stack = e.stack;
        console.log(stack);
      }
    } else {
      console.log("Passed: " + expected + " is equal to " + actual)
    }
  },
  isNotEqual: function(expected, actual) {
    if ((expected == actual)) {
      try {
        throw new Error("Failed " + expected + " is equal to " + actual)
      } catch (e) {
        var stack = e.stack;
        console.log(stack);
      }
    } else {
      console.log("Passed: " + expected + " is not equal to " + actual)
    }
  },
  includes: function(array, element) {
    if (!(array.includes(element))) {
      try {
        throw new Error("Failed " + array + " does not include " + element)
      } catch (e) {
        var stack = e.stack;
        console.log(stack);
      }
    } else {
      console.log("Passed: " + array + " does include " + element)
    }
  }
}
