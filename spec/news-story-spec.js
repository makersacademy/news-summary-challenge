function newsStoryHasAnID() {
  var newsStory = new NewsStory(1, 'apiResponseElement');

  assert.isTrue(newsStory.id === 1);
};

function returnsIdOfNewsStory() {
  var newsStory = new NewsStory(4, 'apiResponseElement');

  assert.isTrue(newsStory.returnId() === 4);
}

function newsStoryHasAHeadline() {
  var testElement = testApiResult.response.results[1];
  var newsStory = new NewsStory(1, testElement);

  assert.isTrue(newsStory.headline === "Hottest frontroom seats. The best theatre and dance to watch online");
};

function newsStoryReturnsHeadlineAsHTML() {
  var testElement = testApiResult.response.results[1];
  var newsStory = new NewsStory(1, testElement);
  var testHeadline = "Hottest frontroom seats. The best theatre and dance to watch online"

  assert.isTrue(newsStory.returnHeadlineHtml() === `<li id="1" class="headline"><h2>${testHeadline}</h2></li>`
  );
};

newsStoryHasAnID();
returnsIdOfNewsStory();
newsStoryHasAHeadline();
newsStoryReturnsHeadlineAsHTML();
