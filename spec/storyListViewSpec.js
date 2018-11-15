describe("storyListView", function() {
  describe("returnList", function() {
    it("returns the stories with HTML", function() {
      var storyListView = StroyListView(["News story"]);
      expect(storyListView).toEqual("<ul><li><div>News story</div></li></ul>")
    });
  });
});
