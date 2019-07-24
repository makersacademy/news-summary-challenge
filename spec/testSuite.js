(function(exports) {

  var assert = {

    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    },

    isEqual: function(assertionToCheck, expectedValue){
      if (assertionToCheck !== expectedValue) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + expectedValue)
      }
    },

    includedIn: function(objectToCheck, value) {
      if (!objectToCheck.includes(value)) {
        throw new Error("Assertion failed: " + value + " is not included in" + objectToCheck)
      }
    },

    includedInArray: function(arrayToCheck, value) {
      if (!arrayToCheck.includes(value)) {
        throw new Error("Assertion failed: " + value + " is not included in" + arrayToCheck)
      }
    }
  };

  var it = function(nameString, callback) {
    try {
      callback()
      var text = "PASS: " + nameString
      addtext(text, "passColour")
    } catch(err) {
      text = "FAIL: " + nameString + err.stack
      addtext(text, "failColour")
    }
  };

  var describe = function(nameString, callback) {
    callback()
  }

  var addtext = function(text, passing) {
    var text = document.createTextNode(text)
    var div = document.createElement("div")
    div.setAttribute("class", passing)
    div.append(text)
    body.append(div)
    body.append(document.createElement("br"))
  }
  exports.assert = assert
  exports.it = it
  exports.describe = describe
})(this);
