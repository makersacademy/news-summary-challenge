function newsStoryHasAnID() {
  var newsStory = new NewsStory(1, 'apiResponseElement');

  assert.isTrue(newsStory.id === 1);
};

function returnsIdOfNewsStory() {
  var testElementId = testApiResult.response.results[1].id
  var newsStory = new NewsStory(testElementId, 'apiResponseElement');

  assert.isTrue(newsStory.returnId() === testElementId);
}

function newsStoryHasAHeadline() {
  var testElement = testApiResult.response.results[1];
  var newsStory = new NewsStory(1, testElement);

  assert.isTrue(newsStory.headline === "Hottest frontroom seats. The best theatre and dance to watch online");
}

function newsStoryHasBodyOfText() {
  var testElement = testApiResult.response.results[0];
  var newsStory = new NewsStory(1, testElement);

  assert.isTrue(newsStory.bodyText === "Test bodyText 1");
}

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
newsStoryHasBodyOfText();
newsStoryReturnsHeadlineAsHTML();
