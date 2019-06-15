var assert = function(actual, expected) {
  if(actual != expected) {
    throw new Error("Failed: " + actual + " is not equal to " + expected)
  } else {
    console.log("Passed!");
  }
};

var describe = function(message, fn) {
  console.log(message);
  fn();
};

var it = function(message, fn)  {
  describe(" " + message, fn)
}

function XMLHttpRequest() {}

var setupResponse = function(responseText = "") {
  XMLHttpRequest.prototype.open = function(method, url, async, username, password) {
  };

  XMLHttpRequest.prototype.send = function(body) {
    this.readyState = 4;
    this.status = 200;
    this.responseText = responseText;

    this.onreadystatechange();
  };
};

var generateHeadlinesJson = function(headlines) {
  var titles = [];

  headlines.forEach(headline => {
    titles.push(`{"webTitle": "${headline}"}`);
  });

  return `{"response": {"results": [${titles.join(',')}]}}`;
};