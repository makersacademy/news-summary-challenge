"use strict";

(function testHeadlineListModelCanStoreAHeadline() {
  var APIDouble = {'results': [{'webTitle': "David Cameron delays book publication"}]}
  var headlineList = new HeadlineList();
  headlineList.addHeadlines(APIDouble);
  assert.isTrue(headlineList.headlineListArray[0]['headline']['webTitle'] === "David Cameron delays book publication")
  console.log("Test for: Headline List model can store a headline PASSED")
})();

(function testHeadlineListModelCanStoreHeadlines() {
  var APIDouble = {'results': [{'webTitle': "David Cameron delays book publication"}, {'webTitle': "ITV apologises to David Cameron for airing abuse"}]}
  var headlineList = new HeadlineList();
  headlineList.addHeadlines(APIDouble);
  assert.isTrue(headlineList.headlineListArray[1]['headline']['webTitle'] === "ITV apologises to David Cameron for airing abuse")
  console.log("Test for: Headline List model can store multiple headlines PASSED")
})();
