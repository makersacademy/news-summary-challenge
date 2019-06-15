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