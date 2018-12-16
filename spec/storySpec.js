describe("Story", function(){
  it("a story has a healine", function() {
    var story = new Story("News story");
    expect(story.headline).toEqual("News story");
  });

  it("has url", function() {
    var story = new Story("News story", "www.newsstroy.com");
    expect(story.url).toEqual("www.newsstroy.com")
  })

  describe("getHeadline", function(){
    it("limits the headline to 50 characters", function(){
      var story = new Story("Today's news story is very exciting and very very long");
      expect(story.getHeadline()).toEqual("Today's news story is very exciting and very very ...")
    });
  });
});
