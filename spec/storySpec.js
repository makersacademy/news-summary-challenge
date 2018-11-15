describe("Story", function(){
  it("a story has a healine", function() {
    var story = new Story("News story")
    expect(story.headline).toEqual("News story")
  });
});
