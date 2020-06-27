function newsStoryHasAnID() {
  var newsStory = new NewsStory(1);

  assert.isTrue(newsStory.id === 1);
};

function returnsIdOfNewsStory() {
  var newsStory = new NewsStory(4);

  assert.isTrue(newsStory.returnId() === 4);
}

function newsStoryHasAHeadline() {
  var newsStory = new NewsStory(1, "Boris does it again");

  assert.isTrue(newsStory.headline === "Boris does it again");
};

function newsStoryReturnsHeadlineAsHTML() {
  var newsStory = new NewsStory(1, "Boris does it again");

  assert.isTrue(newsStory.returnHeadlineHtml() === '<li id="1" class="headline"><h2>Boris does it again</h2></li>'
  );
};

newsStoryHasAnID();
returnsIdOfNewsStory();
newsStoryHasAHeadline();
newsStoryReturnsHeadlineAsHTML();
