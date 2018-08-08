"use strict";

(function testHeadlineModelCanAccessAHeadline() {
  var apiCallResponse = {'response': {'results': [{'webTitle': "Danny Dyre is Great"}]}}
  var headline = new Headline(apiCallResponse.response.results[0])
  assert.isTrue(headline.text() === "Danny Dyre is Great")
  console.log("Test: Headline model can access a headline PASSED")
})();
