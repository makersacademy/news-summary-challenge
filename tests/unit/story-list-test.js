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

describe("StoryList handling ids",
  function () {
    var storyList = new StoryList(StoryModelMock);
    var text = "Test story";
    var title = "Title";
    var url = "url";
    storyList.create(text, title, url);
    assert.isTrue(storyList.all()[0].id() === 0, "StoryList assigns an id to the story using .create");
    storyList.create(text, title, url);
    assert.isTrue(storyList.all()[1].id() === 1, "StoryList increments the id for each story");
  }
);
