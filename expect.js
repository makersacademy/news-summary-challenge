var expect = function(actual) {
  return({
    toEqual: function (expected) {
      if (actual == expected) {
        return "Pass"
      } else {
        throw Error(`Expected ${expected}, but got ${actual}`)
      }
    }
  })
}