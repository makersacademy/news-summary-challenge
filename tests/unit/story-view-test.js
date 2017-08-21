describe("StoryView .toHtml",
  function () {
    var description = ".toHtml returns functional html";
    var storyList = new StoryListModelMock(StoryModelMock);
    storyList.create("Text", "Title", "URL");
    var storyMock = storyList.all()[0];
    var storyView = new StoryView(storyMock);
    var html = "<a class='button' href=#story/all>BACK</a><br><div id='story'><img class='thumbnail' src='URL'></br><h2>Title</h2></br><p>Text</p></br></div>";
    assert.isTrue(storyView.toHtml() === html, description);
  }
);
