var assert = {
  isEqual: function(object, expectation) {
    if (object !== expectation) {
      throw new Error("Test failed. Expect: " + "'" + expectation + "'" + " to equal to " + "'" + object + "'");
    } else {
      console.log("Test passed. " + "'" + expectation + "'" + " is equal to " + "'" + object + "'")
    }
  },

  isPrintOut: function(object, expectation) {
    if (object !== expectation) {
      throw new Error("Test failed. Expect: " + "'" + expectation + "'" + " but printed out " + "'" + object + "'");
    } else {
      console.log("Test passed. " + "'" + expectation + "'" + " printed out " + "'" + object + "'")
    }
  },

  arrayIncludeObject: function(array, object) {
    if (!array.includes(object)) {
      throw new Error("Test failed. Expect: " + "'" + array + "'" + " to include" + "'" + object + "'");
    } else {
      console.log("Test passed. " + "'" + array + "'" + " includes" + "'" + object + "'")
    }
  }
};
