describe("storyListView", function() {
  describe("returnList", function() {
    it("returns the stories with HTML", function() {
      var storyListView = new StoryListView(["News story"]);
      expect(storyListView.returnList()).toEqual("<ul><li><div>News story</div></li></ul>")
    });
  });
});
