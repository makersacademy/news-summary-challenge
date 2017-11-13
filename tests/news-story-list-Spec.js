(function(exports) {

function storyListhasArray() {
  var storyList = new StoryList();
  assert.isTrue(storyList.getStories.length === 0);
}

storyListhasArray();

})(this);
