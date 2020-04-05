(function(exports) {
  function testStoryListStoresStories() {
    var storyList = new StoryList()
    storyList.create("headline","This is a summary of the article")

    assert.isTrue(storyList.stories[0].headline === "headline");
    assert.isTrue(storyList.stories[0].summary === "This is a summary of the article");
  }
  testStoryListStoresStories();
})(this);