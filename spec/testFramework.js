(function(exports) {
  function describe(description, it) {
    var describeDiv = document.createElement("H2")
    var t = document.createTextNode(description)
    describeDiv.appendChild(t);
    document.body.appendChild(describeDiv);
    it();
  }

  function it(description, test) {
    var itDiv = document.createElement("H3")
    var t = document.createTextNode(description)
    itDiv.appendChild(t);
    document.body.appendChild(itDiv);
    test();
  }

  function toEqual(expectedValue) {
    var div = document.createElement("P")
    if (expectedValue === actualValue) {
      var result = "true";
    } else {
      var result = "false --- "+ "expected: " + expectedValue + " but got: " + actualValue;
    }
    var t = document.createTextNode(result)
    div.appendChild(t);
    if (result === "true") {
      document.body.appendChild(div).style.color = "green"
    } else {
      document.body.appendChild(div).style.color = "red"
    }
  }

  function expect(actual) {
    actualValue = actual;
    return {
      toEqual: toEqual
    }
  }

  function makeDouble(name) {
    this[name] = function() {}
    function addMethod(method, output) {
      this[method] = function() {
        return output
      }
    }
    return {
      addMethod: addMethod
    }
  }

  exports.describe = describe
  exports.it = it
  exports.expect = expect
  exports.makeDouble = makeDouble
})(this)
