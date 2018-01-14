(function(exports) {
  function NewsController(newspaper, newspaperView) {
    this.newspaper = newspaper || new Newspaper();
    this.newspaperView = newspaperView || new NewspaperView(this.newspaper);
  }

  NewsController.prototype.addHeadlinesToPage = function(el) {
      document.getElementById(el).innerHTML = this.newspaperView.returnHtml();
  };

  NewsController.prototype.loadHeadlines = function(el) {
    var self = this;
    this.newspaper.fetchArticles(function() {
      self.addHeadlinesToPage(el);
    });
  };

  exports.NewsController = NewsController;
})(this);
