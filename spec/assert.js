var assert = {

  isTrue: function(testCondition, testDescription) {
    if (!testCondition) {
      throw new Error(`${testDescription} failed: ${testCondition} is not truthy`);
    } else {
      console.log(`%c${testDescription} passed: ${testCondition}`, 'color: green');
    }
  },

  isEqual: function(testArg1, testArg2, testDescription) {
    if (testArg1 != testArg2) {
      throw new Error(`${testDescription} failed: ${testArg1} is not equal ${testArg2}`);
    } else {
      console.log(`%c${testDescription} passed: ${testArg1} is equal ${testArg2}`, 'color: green');
    }
  },

  arraysAreEqual: function(testArray1, testArray2, testDescription) {
    if (testArray1.length != testArray2.length) {
      throw new Error(`${testDescription} failed: ${testArray1} is not equal ${testArray2}`);
    }
    for (var i = 0; i < testArray1.length; i++) {
      if (testArray1[i] != testArray2[i]) {
        throw new Error(`${testDescription} failed: ${testArray1} is not equal ${testArray2}`);
      }
    }
    console.log(`%c${testDescription} passed: ${testArray1} is equal ${testArray2}`, 'color: green');
  }
};
