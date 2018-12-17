// Example layout:

// describe("", function() {
//   describe("", function() {
//     it("", function() {
//       expect().toEqual();
//     })
//   })
// })

function describe(description, func) {
  spectrum.string += "<div id='describe'>" + description + "</div>";
  console.log(description);
  func();
}

function it(description, func) {
  spectrum.string += "<div id='it'>" + description + "</div>";
  console.log(description);
  func();
}

function expect(input) {
  this.output = input;
  return this;
}

function toEqual(expectation) {
  escExpectation = expectation.replace("<", "&lt;");
  escOutput = this.output.replace("<", "&lt;");
  message = ("Expected: " + expectation +
    "\nOutput: " + this.output);

  if (this.output === expectation) {
    spectrum.string += "<div id='message'>" + message + "</div>";
    spectrum.string += "<div id='pass'>Test passed.</div>";
    console.log(message + "\nTest passed.");
  }
  else {
    spectrum.string += "<div id='message'>" + message + "</div>";
    spectrum.string += "<div id='fail'>Test failed.</div>";
    console.log(message + "\nTest failed.");
  }
}

function isArray(expectation) {
  message = ("Expected: isArray() === " + expectation +
    "\nOutput: isArray() === " + (Array.isArray(this.output)));

  if (Array.isArray(this.output) === expectation) {
    spectrum.string += "<div id='message'>" + message + "</div>";
    spectrum.string += "<div id='pass'>Test passed.</div>";
    console.log(message + "\nTest passed.");
  }
  else {
    spectrum.string += "<div id='message'>" + message + "</div>";
    spectrum.string += "<div id='fail'>Test failed.</div>";
    console.log(message + "\nTest failed.");
  }
}

function isObject(expectation) {
  message = ("Expected: isObject() === " + expectation +
    "\nOutput: isObject() === " + (typeof this.output === "object"));

  if ((typeof this.output === "object") === expectation) {
    spectrum.string += "<div id='message'>" + message + "</div>";
    spectrum.string += "<div id='pass'>Test passed.</div>";
    console.log(message + "\nTest passed.");
  }
  else {
    spectrum.string += "<div id='message'>" + message + "</div>";
    spectrum.string += "<div id='fail'>Test failed.</div>";
    console.log(message + "\nTest failed.");
  }
}

function createDouble(keyArray, valueArra) {
  var obj = {};

  keyArray.forEach(function(keyName, index) {
    obj[keyName] = valueArra[index];
  })

  return obj;
}
