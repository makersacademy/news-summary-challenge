var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else{
      console.log('%c' + "Test passed, " + assertionToCheck + " is truthy", 'color: green');
    }
  },

  isEqual: function(firstItem, secondItem) {
    if (firstItem !== secondItem) {
      throw new Error("Assertion failed: '" + firstItem + "' & '" + secondItem + "' are not equal");
    }
    else{
      console.log('%c' + "Test passed, " + firstItem + " is equal to " + secondItem, 'color: green');
    }
  },

  includes: function(firstItem, secondItem) {
    if (!firstItem.includes(secondItem)) {
      throw new Error("Assertion failed: '" + firstItem + "' does not include " + secondItem);
    }
    else{
      console.log('%c' + "Test passed, '" + firstItem + "' includes '" + secondItem + "'", 'color: green');
    }
  },

  throwsError: function(someFunction) {
    try {
      someFunction();
    }
    catch(error) {
      console.log('%c' + "Test passed, " + someFunction + " raises error", 'color: green');
      return;
    }
    throw new Error("Assertion failed: " + someFunction + " does not raise error");
  }
};
