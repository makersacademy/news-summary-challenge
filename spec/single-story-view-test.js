(function TestSingleStoryViewInstantiation() {
  var list = new List()
  var story = list.newStory("Favourite drink: seltzer")
  var storyView = new StoryView(story)

  assert.isTrue(storyView.story instanceof Story)
})();

(function TestReturnString() {
  var list = new List()
  var story = list.newStory("Favourite drink: seltzer")
  var storyView = new StoryView(story)
  
  assert.isTrue(storyView.returnString() === "<div>Favourite drink: seltzer</div>")
})();
