"use strict";

(function testSingleNewsStoryModelCanReturnApiCallStorySummaryText() {
  var storyDouble = {"text": "This is a test news story."}
  var singleNewsStory = new SingleNewsStory(storyDouble)
  var expectedText = "This is a test news story."
  assert.isTrue(singleNewsStory.storyText() === expectedText);
  console.log("Test for: Single News Story Model can return story text PASSED")
})();
