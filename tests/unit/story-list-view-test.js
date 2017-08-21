describe("StoryListView .toHtml",
  function () {
    var description = ".toHtml returns valid HTML of the storylist";
    var storyListMock = new StoryListModelMock(StoryModelMock);
    storyListMock.create("Text", "Title", "URL");
    var storyListView = new StoryListView(storyListMock);
    console.log(storyListView.toHtml());
    assert.isTrue(storyListView.toHtml() === "<div class='story'><img class='thumbnail' src='URL'></br><a href='#stories/0'><h3>Title</h3></br></a></div>", description);
  }
);
