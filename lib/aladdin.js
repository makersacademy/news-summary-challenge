(function (exports) {

  function Aladdin(assertionToCheck) {
    this.assertionToCheck = assertionToCheck;
  }

  Aladdin.prototype = {
    toEqual: function (assertion) {
      if (assertion === this.assertionToCheck) {
        console.log('Test passed\n')
      } else {
        catchErrors(new Error("Assertion failed: expected " + assertion + " but received " + this.assertionToCheck + "\n"))
      };
    },
    toNotBeNull: function () {
      if (this.assertionToCheck) {
        console.log('Test passed\n');
      } else {
        catchErrors(new Error("Assertion failed: expected " + this.assertionToCheck + " not to be null, but got null\n"))
      };
    },
    toBeNull: function () {
      if (!this.assertiontoCheck) {
        console.log('Test passed\n');
      } else {
        catchErrors(new Error("Assertion failed: expected " + this.assertionToCheck + " to be null, but didn't get null\n"))
      };
    },
    toBeArray: function () {
      if (Array.isArray(this.assertionToCheck)) {
        console.log('Test passed\n');
      } else {
        catchErrors(new Error("Assertion failed: expected " + this.assertionToCheck + " to be an array, but it isn't\n"))
      };
    },
    toInclude: function (assertion) {
      if (this.assertionToCheck.includes(assertion)) {
        console.log('Test passed\n');
      } else {
        catchErrors(new Error("Assertion failed: expected " + this.assertionToCheck + " to include " + assertion + ", but it wasn't found\n"))
      };
    },
    toBeInstanceOf: function (assertion) {
      if (this.assertionToCheck instanceof assertion) {
        console.log('Test passed\n');
      } else {
        catchErrors(new Error("Assertion failed: expected " + this.assertionToCheck + " to be of type " + assertion + ", but it wasn't\n"))
      };
    },
  }

  var catchErrors = function (message) {
    try{
      throw message;
    } catch (e) {
      console.log(e.stack);
    }
  }

  var expect = function (assertionToCheck) {
    return new Aladdin(assertionToCheck);
  }

  exports.wish = expect
})(this);

(function (exports) {
  var describe = function (text, fn) {
    console.log(text);
    fn();
  }
  exports.aWholeNewWorld = describe;
})(this);

(function (exports) {
  var it = function (text, fn) {
    console.log(text);
    fn();
  }
  exports.it = it;
})(this);