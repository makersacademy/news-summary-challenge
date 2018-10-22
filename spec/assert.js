const check = (title, callback) => {
  try{
    callback();
    console.log(`PASS ${title}`);
  } catch(e) {
    console.log(`FAIL ${title}`);
    console.log(e.stack);
  }
};

const assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  include: function(array, contents) {
    let arrayLength = array.length;
    let times = 0
    for (let i = 0; i < arrayLength; i++) {
      if (array[i] === contents) {
        times++;
      }
    }
    if (times === 0) {
      throw new Error("Assertion failed: " + array + " does not include " + contents);
    }
  },

  isEmpty: function (array) {
    if (!array.length === 0) {
      throw new Error("Assertion failed: " + array + " is not empty");
    }
  }
};
