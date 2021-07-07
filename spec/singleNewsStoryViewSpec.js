"use strict";

(function testSingleNewsStoryViewReturnsFullHTML() {
  var storyDouble = {"text": "This is a test news story to ensure the view returns HTML."}
  var singleNewsStoryView = new SingleNewsStoryView(storyDouble);

  var expectedHTML = "<div>This is a test news story to ensure the view returns HTML.</div>"
  assert.isTrue(singleNewsStoryView.returnNewsStoryHTML() === expectedHTML);
  console.log("Test for: Single News Story returns full story HTML PASSED")
})();
