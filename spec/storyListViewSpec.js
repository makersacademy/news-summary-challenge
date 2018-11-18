describe("storyListView", function() {
  describe("returnList", function() {
    it("returns a story with HTML and id", function() {
      function StoryDouble(headline, url) {this.headline = headline; this.url = url;};
      var firstStoryDouble = new StoryDouble("News story", "www.newsstory.com");
      function StoryListDouble(stories) {this.list = []};
      StoryListDouble.prototype.addStory = function (story) {this.list.push(story)};
      var storyListDouble = new StoryListDouble();
      storyListDouble.addStory(firstStoryDouble);
      var storyListView = new StoryListView(storyListDouble);
      expect(storyListView.returnList()).toEqual("<ul><li><div id='0'><a href='#www.newsstory.com'>News story</a></div></li></ul>")
    });
  });
});
