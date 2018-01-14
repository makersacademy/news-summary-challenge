(function(exports) {
  function NewsController(newspaper, newspaperView) {
    this.newspaper = newspaper || new Newspaper();
    this.newspaperView = newspaperView || new NewspaperView(this.newspaper);
  }

  NewsController.prototype.addHeadlinesToPage = function(el) {
    var self = this;
    this.newspaper.fetchArticles(function() {
      document.getElementById(el).innerHTML = self.newspaperView.returnHtml();
    });
  };

  exports.NewsController = NewsController;
})(this);
