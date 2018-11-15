describe("storyListView", function() {
  describe("returnList", function() {
    it("returns a story with HTML and id", function() {
      var storyListView = new StoryListView(["News story"]);
      expect(storyListView.returnList()).toEqual("<ul><li><div id='0'>News story</div></li></ul>")
    });

    it("returns the stories with HTML and ids", function() {
      var storyListView = new StoryListView(["News story", "Another news story"]);
      expect(storyListView.returnList()).toEqual("<ul><li><div id='0'>News story</div></li><li><div id='1'>Another news story</div></li></ul>")
    });
  });
});
