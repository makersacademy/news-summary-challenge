var headlines;
var headlinesView;
var headlinesController;
var headlineElement = document.getElementById('headlines');
var story;
var storyView;
var storyController;
var storyElement = document.getElementById('story');

function listenForHashChange () {
  window.addEventListener("hashchange", actionOnHashChange);
}

function actionOnLoadPage () {
  var headlinesRequest = new XMLHttpRequest();
  headlinesRequest.addEventListener("load", actionOnLoadHeadlines);
  headlinesRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=thumbnail");
  headlinesRequest.send();
  listenForHashChange();
}

function actionOnLoadHeadlines () {
  headlines = new Headlines(JSON.parse(this.responseText).response.results);
  headlinesView = new HeadlinesView(headlines);
  headlinesController = new HeadlinesController(headlinesView, headlineElement);
  headlinesController.insertHTML();
};

function actionOnLoadStory () {
  story = new Story(JSON.parse(this.response).response.content);
  storyView = new StoryView(story);
  storyController = new StoryController(storyView, storyElement);
  storyController.insertHTML();
}

function actionOnHashChange () {
  var summaryRequest = new XMLHttpRequest();
  summaryRequest.addEventListener("load", actionOnLoadStory);
  summaryRequest.open("GET", `http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${getIdFromURL()}?show-fields=all`)
  summaryRequest.send();
};

function getIdFromURL() {
  return window.location.hash.split('/').slice(1).join('/');
};
