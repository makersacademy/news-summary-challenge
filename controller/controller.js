function Controller(Headlines, Summaries) {
  this.headlines = Headlines
  this.summaries = Summaries
};

Controller.prototype.insertHeadlines = function() {
  document.getElementById('headlineList').innerHTML = this.headlines.makeHtmlList();
};

Controller.prototype.insertSummaries = function() {
  document.getElementById('summaryList').innerHTML = this.summaries.makeHtmlList();
};
