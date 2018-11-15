describe("storyList", function() {
  it("shows a list of story healines", function() {
    function StoryDouble(story) {this.headline = story; };

    var firstStoryDouble = new StoryDouble("News story");
    var secondStoryDouble = new StoryDouble("Another news story");
    var storyList = new StoryList;
    storyList.addStory(firstStoryDouble)
    storyList.addStory(secondStoryDouble)
    expect(storyList.list[0]).toEqual("News story")
    expect(storyList.list[1]).toEqual("Another news story")
  });
});
