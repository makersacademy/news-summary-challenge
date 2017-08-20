describe("StoryListView .toHtml",
  function () {
    var description = ".toHtml returns valid HTML of the storylist";
    var storyListMock = new StoryListModelMock(StoryModelMock);
    storyListMock.create("Text", "Title", "URL");
    var storyListView = new StoryListView(storyListMock);
    assert.isTrue(storyListView.toHtml() === "<div class='story'><img src='URL'></br><h2>Title</h2></br></div>", description);
  }
);
