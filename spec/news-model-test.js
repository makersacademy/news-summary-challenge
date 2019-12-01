var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passes!");
    }
  }
};

(function testHeadlineStoresHeadline() {
  var headline = new Headline("Incident at London Bridge");
  assert.isTrue(headline.headline === "Incident at London Bridge");
})();

(function testHeadlineReturnsHeadline() {
  var headline = new Headline("Incident at London Bridge");
  assert.isTrue(headline.returnHeadline() === "Incident at London Bridge");
})();
