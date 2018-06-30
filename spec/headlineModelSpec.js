"use strict";

(function testheadlineModelAccessHeadline() {
  var fromAPIDouble = {'webTitle': "Danny Dyre is Great!"}
  var headline = new Headline(fromAPIDouble)
  assert.isTrue(headline.text() === "Danny Dyre is Great!")
  console.log("Test for: Headline model can access a headline PASSED")
})();
