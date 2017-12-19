var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("<p style='color: red; font-weight: bold'> Assertion failed: expected "  + assertionToCheck + " to be true </p>")
    } else {
      return "<p style='color: green; font-weight: bold'> Test is passing!</p>"
    }
  }
}
