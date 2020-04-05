(function(exports) {
  function testStoryReturnsText() {
    var story = new Story("headline","This is a summary of the article");

    assert.isTrue(story.headline === "headline" && story.summary === "This is a summary of the article");
  }
  testStoryReturnsText();
})(this);