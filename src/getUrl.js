function changeURLWhenStorySelected() {
  window.addEventListener("hashchange", showStory);
};

function showStory() {
  show(getID(window.location));
};

function getID() {
  return location.hash.split("#")[1];
};

function show() {
  var headline = document.getElementById('headline');
  headline.innerHTML = story.headline;
  var content = document.getElementById('story');
  content.innerHTML = story.content;
};

changeURLWhenStorySelected();
