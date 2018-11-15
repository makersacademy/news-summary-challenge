describe("storyShowOriginal", function(){
  it("shows the heading and original content of a story in HTML string", function() {
    function StoryDouble(headline, content) {
      this.headline = headline;
      this.content = content;
    };

    var storyDouble = new StoryDouble("News story", "This news story is great");
    var storyShowOriginal = new StoryShowOriginal(storyDouble);
    expect(storyShowOriginal.renderText()).toEqual('<h1>News story</h1><div>This news story is great</div>')
  });
});
