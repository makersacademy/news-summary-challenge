function HeadlineController(headlineListView = new HeadlineListView()) {
  this.headlineListView = headlineListView;
}

HeadlineController.prototype.add = function(headline, url) {
  this.headlineListView.add(headline, url);
}

HeadlineController.prototype.returnHeadlines = function() {
  return this.headlineListView.getHTML();
}

var headlineController = new HeadlineController();
