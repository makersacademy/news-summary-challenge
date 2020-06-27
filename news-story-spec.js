function newsStoryHasAnID() {
  var newsStory = new NewsStory(1);

  assert.isTrue(newsStory.id === 1);
};

newsStoryHasAnID();