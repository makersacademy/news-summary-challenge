var tests = []

function expect(assertionToCheck1, description){

  return {
    isTrue: function(assertionToCheck2) {
      if (assertionToCheck1 !== assertionToCheck2) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else {
        return `${description}`
      }
    },

    eq: function(assertionToCheck2) {
      if (assertionToCheck1 !== assertionToCheck2) {
        throw new Error(assertionToCheck1 + " is not equal to " + assertionToCheck2);
      }  else {
        return `${description}`
      }
    },

    be_a: function(assertionToCheck2) {
      if (assertionToCheck1.constructor.name !== assertionToCheck2) {
        throw new Error(typeof(assertionToCheck1) + " is not type of " + assertionToCheck2);
      }  else {
        return `${description}`
      }
    }
  }

};

function execute_test(index) {
  return tests[index]();
}

function numOfTests() {
  return tests.length;
}
