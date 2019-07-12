var assert = {
  equal: function(actual, expected) {
    if (!(actual === expected)) {
      console.log("    Fail! Expected: " + expected + ", but got : " + actual);
    } else {
      console.log("    Pass");
    }
  }
}