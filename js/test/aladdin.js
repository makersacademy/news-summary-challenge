(function (exports) {

  exports.Aladdin = function (assertionToCheck) {

    function toEqual(assertion) {
      var display = new Display("toEqual")
      if (assertion === assertionToCheck) {
        display.printMessage('Test passed\n')
      } else {
        var message = catchErrors(new Error("Assertion failed: expected " + assertion + " but received " + assertionToCheck + "\n"));
        display.printMessage(message);
        display.addStyle("error");
      };
    };

    function toNotBeNull() {
      var display = new Display("toNotBeNull")
      if (assertionToCheck) {
        display.printMessage('Test passed\n');
      } else {
        var message = catchErrors(new Error("Assertion failed: expected " + assertionToCheck + " not to be null, but got null\n"))
        display.printMessage(message);
        display.addStyle("error");
      };
    };

    function toBeNull() {
      var display = new Display("toBeNull")
      if (!assertiontoCheck) {
        display.printMessage('Test passed\n');
      } else {
        var message = catchErrors(new Error("Assertion failed: expected " + assertionToCheck + " to be null, but didn't get null\n"))
        display.printMessage(message);
        display.addStyle("error");
      };
    };

    function toBeArray() {
      var display = new Display("toBeArray")
      if (Array.isArray(assertionToCheck)) {
        display.printMessage('Test passed\n');
      } else {
        var message = catchErrors(new Error("Assertion failed: expected " + assertionToCheck + " to be an array, but it isn't\n"))
        display.printMessage(message);
        display.addStyle("error");
      };
    };

    function toInclude(assertion) {
      var display = new Display("toInclude")
      if (assertionToCheck.includes(assertion)) {
        display.printMessage('Test passed\n');
      } else {
        var message = catchErrors(new Error("Assertion failed: expected " + assertionToCheck + " to include " + assertion + ", but it wasn't found\n"))
        display.printMessage(message);
        display.addStyle("error");
      };
    };

    function toBeInstanceOf(assertion) {
      var display = new Display("toBeInstanceOf")
      if (assertionToCheck instanceof assertion) {
        display.printMessage('Test passed\n');
      } else {
        var message = catchErrors(new Error("Assertion failed: expected " + assertionToCheck + " to be of type " + assertion + ", but it wasn't\n"))
        display.printMessage(message);
        display.addStyle("error");
      };
    };

    function catchErrors(message) {
      var display = new Display("error")
      try {
        throw message;
      } catch (e) {
        return e.stack;
      }
    }

    return {
      toEqual: toEqual,
      toInclude: toInclude,
      toBeNull: toBeNull,
      toNotBeNull: toNotBeNull,
      toBeArray: toBeArray,
      toInclude: toInclude,
      toBeInstanceOf: toBeInstanceOf,
      catchErrors: catchErrors
    }
  }
})(this);

(function (exports) {
  var expect = function (assertionToCheck) {
    return new Aladdin(assertionToCheck);
  }

  exports.wish = expect
})(this);

(function (exports) {
  var describe = function (text, fn) {
    var display = new Display("describe")
    display.printMessage(text);
    fn();
  }
  exports.aWholeNewWorld = describe;
})(this);

(function (exports) {
  var it = function (text, fn) {
    var display = new Display("it")
    display.printMessage(text);
    fn();
  }
  exports.it = it;
})(this);