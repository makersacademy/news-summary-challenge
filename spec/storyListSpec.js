describe("storyList", function() {
  it("shows a list of story healines", function() {
    var storyList = new StoryList
    storyList.addStory("News story")
    storyList.addStory("Another news story")
    expect(storyList.list[0]).toEqual("News story")
    expect(storyList.list[1]).toEqual("Another news story")
  });
});
