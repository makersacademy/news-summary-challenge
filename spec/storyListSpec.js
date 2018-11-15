describe("storyList", function() {
  it("shows a list of story healines", function() {
    var storyList = new StoryList
    storyList.addStory("News story")
    storyList.addStory("Another news story")
    expect(storyList.list).toEqual(["News story", "Another news story"])
  });
});
