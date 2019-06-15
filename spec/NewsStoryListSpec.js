describe("News Story List", function(){
  var storylist = new NewsStoryList();
  var story = new NewsStory("Headline", "Story text");

  it("can add a story to a list", function(){
    storylist.addStory(story);
    assert(storylist._stories.length, 1);
  });

  it("can return a list of stories", function(){
    storylist.addStory(story);
    assert("Headline", story._headline);
  });
});
