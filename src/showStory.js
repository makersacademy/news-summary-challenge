makeUrlChangeShowStoryForCurrentPage();

function makeUrlChangeShowStoryForCurrentPage() {
  window.addEventListener("hashchange", showStoryForCurrentPage);
};

function showStoryForCurrentPage() {
  showStory(getStoryFromUrl(window.location));
};

function getStoryFromUrl(location) {
  a = location.hash.split("#")[1];
  if(stories.length > 1){
    return stories[a].showSummary();
  } else {
    backupStories = ['an example of a summary', 'another example of a summary', 'yet another', 'last one']
    return backupStories[a - 1]
  }
};

function showStory(story) {
  document
    .getElementById("highlightedStory")
    .innerHTML = '<p>' + story + '</p>';
};
