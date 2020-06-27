function newsStoryHasAnID() {
  var newsStory = new NewsStory(1);

  assert.isTrue(newsStory.id === 1);
};

function newsStoryHasAHeadline() {
  var newsStory = new NewsStory(1, "Boris does it again");

  assert.isTrue(newsStory.headline === "Boris does it again");
};

newsStoryHasAnID();
newsStoryHasAHeadline();
