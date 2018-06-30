"use strict";

(function testHeadlineListModelCanStoreAHeadline() {
  var fromAPIDouble = {'results': [{'webTitle': "David Cameron delays book publication"}]}
  var headlineList = new HeadlineList();
  headlineList.addHeadlines(fromAPIDouble)
  assert.isTrue(headlineList.headlineListArray[0]['webTitle'] === "David Cameron delays book publication")
  console.log("Test for: Headline List model can store a headline PASSED")
})();

(function testHeadlineListModelCanStoreHeadlines() {
  var fromAPIDouble = {'results': [{'webTitle': "David Cameron delays book publication"}, {'webTitle': "ITV apologises to David Cameron for airing abuse"}]}
  var headlineList = new HeadlineList();
  headlineList.addHeadlines(fromAPIDouble)
  assert.isTrue(headlineList.headlineListArray[1]['webTitle'] === "ITV apologises to David Cameron for airing abuse")
  console.log("Test for: Headline List model can store multiple headlines PASSED")
})();
