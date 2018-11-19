window.addEventListener("hashchange", showStory);

function showStory() {
  show(getID(window.location));
};

function getID() {
  return location.hash.split("#")[1];
};

function show() {
  var headline = document.getElementById('headline');
  headline.innerHTML = story.headline;
  var constructAylienUrl = new ConstructAylienUrl;
  var aylienUrl = constructAylienUrl.getUrl(story.url);
  var getStorySummary = new GetStorySummary();
  getStorySummary.getSummary(aylienUrl);
};
