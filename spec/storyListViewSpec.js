describe("storyListView", function() {
  describe("returnList", function() {
    it("returns a story with HTML", function() {
      var storyListView = new StoryListView(["News story"]);
      expect(storyListView.returnList()).toEqual("<ul><li><div>News story</div></li></ul>")
    });

    it("returns the stories with HTML", function() {
      var storyListView = new StoryListView(["News story", "Another news story"]);
      expect(storyListView.returnList()).toEqual("<ul><li><div>News story</div></li><li><div>Another news story</div></li></ul>")
    });
  });
});
