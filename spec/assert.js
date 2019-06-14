var assert = function(actual, expected) {
  if(actual != expected) {
    throw new Error("Fail: " + actual + " is not equal to " + expected)
  } else {
    console.log("Test passing! " + actual + " is equal to " + expected)
  }
};

var describe = function(describe, fn) {
  console.log(describe);
  fn();
};

var it = function(message, fn)  {
  describe(" " + message, fn)
}
