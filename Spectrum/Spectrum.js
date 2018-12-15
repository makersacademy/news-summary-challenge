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
  escExpectation = expectation.split("<").join("&lt;");
  escOutput = this.output.split("<").join("&lt;");

  expected = "Expected: " + escExpectation;
  poutput =  "Output: &nbsp;&nbsp;" + escOutput;

  if (this.output === expectation) {
    spectrum.string += "<div id='message'>" + expected + "<br>" + poutput + "</div>";
    spectrum.string += "<div id='pass'>Test passed.</div>";
    console.log(expected + "\n" + poutput + "\nTest passed.");
  }
  else {
    spectrum.string += "<div id='message'>" + expected + "<br>" + poutput + "</div>";
    spectrum.string += "<div id='fail'>Test failed.</div>";
    console.log(expected + "\n" + poutput + "\nTest failed.");
  }
}

function isArray(expectation) {
  expected = "Expected: isArray() === " + expectation;
  poutput = "Output: &nbsp;&nbsp;isArray() === " + (Array.isArray(this.output));

  if (Array.isArray(this.output) === expectation) {
    spectrum.string += "<div id='message'>" + expected + "<br>" + poutput + "</div>";
    spectrum.string += "<div id='pass'>Test passed.</div>";
    console.log(expected + "\n" + poutput + "\nTest passed.");
  }
  else {
    spectrum.string += "<div id='message'>" + expected + "<br>" + poutput + "</div>";
    spectrum.string += "<div id='fail'>Test failed.</div>";
    console.log(expected + "\n" + poutput + "\nTest failed.");
  }
}

function isObject(expectation) {
  expected = "Expected: isObject() === " + expectation;
  poutput = "Output: &nbsp;&nbsp;isObject() === " + (typeof this.output === "object");

  if ((typeof this.output === "object") === expectation) {
    spectrum.string += "<div id='message'>" + expected + "<br>" + poutput + "</div>";
    spectrum.string += "<div id='pass'>Test passed.</div>";
    console.log(expected + "\n" + poutput + "\nTest passed.");
  }
  else {
    spectrum.string += "<div id='message'>" + expected + "<br>" + poutput + "</div>";
    spectrum.string += "<div id='fail'>Test failed.</div>";
    console.log(expected + "\n" + poutput + "\nTest failed.");
  }
}
