function Controller(Headlines) {
  this.headlines = Headlines
};

Controller.prototype.insertHeadlines = function() {
  document.getElementById('headlineList').innerHTML = this.headlines.makeHtmlHeadlines();
};

Controller.prototype.makeUrlChangeShowSummaryForCurrentHeadline = function() {
  window.addEventListener("hashchange", function() {this.showSummaryForCurrentPage()}.bind(this));
};

Controller.prototype.getStoryID = function() {
  return window.location.hash.split("#")[1]
};

Controller.prototype.findStoryById = function(id) {
  var story = this.headlines.articles.find(function(article) {
    if (`${id}` === article.id) { return article };
  });
  return story
};

Controller.prototype.showSummaryForCurrentPage = function() {
  this.singleStory = new SingleStory(this.findStoryById(this.getStoryID()))
  showThumbnail(this.singleStory.getStoryThumbnail());
  showSummary(this.singleStory.getStorySummary());
  showFullStory(this.singleStory.getFullStoryLink());
};

function showThumbnail(thumbnail) {
  document
    .getElementById("image")
  .innerHTML = thumbnail;
};

function showSummary(summary) {
  document
    .getElementById("summary")
    .innerHTML = summary;
};

function showFullStory(link) {
  document
    .getElementById("articleLink")
    .innerHTML = link;
};
