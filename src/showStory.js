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
  console.log('getStoryFromUrl')
  a = location.hash.split("#")[1];
  console.log(`a = ${a}`)
  return stories[a].showSummary();
};

function showStory(story) {
  a = window.location.hash.split("#")[1];
    console.log(a)
  document
    .getElementById("highlightedStory")
    .innerHTML = '<div class="story">' + story.showSummary() + '</div>';
};
