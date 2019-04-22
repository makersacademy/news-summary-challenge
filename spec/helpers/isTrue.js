
console.log('is true has loaded')
var assert = {
  isTrue: function (assertionToCheck) {
  
    if (!assertionToCheck) {
      throw new Error("Assertion failed :( " + assertionToCheck + "is not true")
    } else {
      console.log("Well done, you passed!!!!" + " -- " + assertionToCheck)
    }
  }
};

