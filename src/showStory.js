makeUrlChangeShowStoryForCurrentPage();

function makeUrlChangeShowStoryForCurrentPage() {
  window.addEventListener("hashchange", showStoryForCurrentPage);
  console.log('hash change')
};

function showStoryForCurrentPage() {
  console.log('showStoryForCurrentPage')
  console.log(getStoryFromUrl(window.location))
  showStory(getStoryFromUrl(window.location));
};

function getStoryFromUrl(location) {
  a = location.hash.split("#")[1];
  if(stories.length > 1){
    console.log('length is more than 1')
    return stories[a].showSummary();
  } else {
    console.log('length is shorter')
    backupStories = ['an example of a summary', 'another example of a summary', 'yet another', 'last one']
    return backupStories[a - 1]
  }
};

function showStory(story) {
  document
    .getElementById("highlightedStory")
    .innerHTML = '<p>' + story + '</p>';
};
