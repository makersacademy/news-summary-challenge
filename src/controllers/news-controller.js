(function(exports) {
  function NewsController(newspaper, newspaperView) {
    this.newspaper = newspaper || new Newspaper();
    this.newspaperView = newspaperView || new NewspaperView(this.newspaper);
  }

  NewsController.prototype.addHeadlinesToPage = function(el) {
    document.getElementById(el).innerHTML = this.newspaperView.returnHtml();
  };

  exports.NewsController = NewsController;
})(this);
