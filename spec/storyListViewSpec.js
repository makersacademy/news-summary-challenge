describe("storyListView", function() {
  describe("returnList", function() {
    it("returns a story with HTML and id", function() {
      function StoryListDouble(stories) {this.list = stories};
      var storyListDouble = new StoryListDouble(["News story"]);
      var storyListView = new StoryListView(storyListDouble);
      expect(storyListView.returnList()).toEqual("<ul><li><div id='0'>News story</div></li></ul>")
    });

    it("returns the stories with HTML and ids", function() {
      function StoryListDouble(stories) {this.list = stories};
      var storyListDouble = new StoryListDouble(["News story", "Another news story"]);
      var storyListView = new StoryListView(storyListDouble);
      expect(storyListView.returnList()).toEqual("<ul><li><div id='0'>News story</div></li><li><div id='1'>Another news story</div></li></ul>")
    });
  });
});
