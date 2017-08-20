describe("StoryList .create .all",
  function () {
    var storyList = new StoryList(StoryModelMock);
    var text = "Test story";
    var title = "Title";
    var url = "url";
    storyList.create(text, title, url);
    assert.isTrue(storyList.all().constructor === Array, "StoryList .all returns an array of stories");
    assert.isTrue(storyList.all()[0].text() === "Test story", "The returned story matches the one created");
  }
);
