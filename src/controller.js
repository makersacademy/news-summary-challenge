'use strict';

let controller = new StoryController;
controller.showAPI();

// Switch to single story view

makeUrlChangeShowStoryForCurrentPage();

function makeUrlChangeShowStoryForCurrentPage(){
  window.addEventListener("hashchange", showStoryForCurrentPage);
};

function showStoryForCurrentPage(){
  getStory(getStoryIndexFromUrl(window.location));
};

function getStoryIndexFromUrl(location) {
  return location.hash[1];
};

function getStory(index) {
  let singleStoryIndex = controller.showStory()[index]
  document
    .getElementById("app")
    .innerHTML = singleStoryIndex.fields.body;
};
