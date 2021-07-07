describe("News Story", function(){
  var story = new NewsStory("Headline", "Story Text")
  it("stores a headline", function(){
    assert(story._headline, "Headline")
  });
  it("stores a story", function(){
    assert(story._story, "Story Text")
  });
  it("headline can be viewed", function(){
    assert(story.viewHeadline(), "Headline")
  });
  it("story can be viewed", function(){
    assert(story.viewStory(), "Story Text")
  });
})
