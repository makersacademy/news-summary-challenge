describe("storyList", function() {
  it("shows a list of story healines", function() {
    function StoryDouble(headline, url) {this.headline = headline; this.url = url;};

    var firstStoryDouble = new StoryDouble("News story", "www.newsstroy.com");
    var secondStoryDouble = new StoryDouble("Another news story", "www.newsstroy.com");
    var storyList = new StoryList;
    storyList.addStory(firstStoryDouble)
    storyList.addStory(secondStoryDouble)
    expect(storyList.list[0]).toEqual(firstStoryDouble)
    expect(storyList.list[1]).toEqual(secondStoryDouble)
  });
});
