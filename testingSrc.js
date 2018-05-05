var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

expect = function(input) {
  return {actual: input};
};

Object.prototype.toEqual = function(expected) {
 if (this.actual === expected) {
   console.log('%c Assertion passing ' + this.actual + ' equals ' + expected, 'color: green; font-weight: bold;');
 } else {
   throw new Error ('expected ' + this.actual + ', got: ' + expected);
 }


};
