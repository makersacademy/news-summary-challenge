(function(exports) {
  function ArticleHeadlinesController () {
    this.getAPIs = 0;
    this.articleList = 0;
    this.articleListView = 0;
  }

  ArticleHeadlinesController.prototype.api = function () {
    this.getAPIs = new GetAPIs();
    this.articleList = this.getAPIs.getHeadlines();
    this.articleListView = new ArticleListView(this.articleList);
  };

  ArticleHeadlinesController.prototype.render = function () {
    var app = document.getElementById("app");
    app.innerHTML = this.articleListView.html();
  };

  ArticleHeadlinesController.prototype._currentID = function() {
    return window.location.hash.split("/")[1];
  };

  ArticleHeadlinesController.prototype._findArticleByID = function(id) {
    return this.articleList.articles.find((article) => {
      return String(article.id) === id;
    });
  };

  ArticleHeadlinesController.prototype.displayArticleSummaryOnClick = function() {
    window.addEventListener("hashchange", () => { this.displayArticleSummary(); });
  };

  ArticleHeadlinesController.prototype.displayArticleSummary = function() {
    var article = this._findArticleByID(this._currentID());
    this.getAPIs.summaryAPI(article);
    setTimeout( () => {
      var view = new ArticleSummaryView(article);
      document.getElementById("app").innerHTML = view.html();
    }, 3000);
  };

  exports.ArticleHeadlinesController = ArticleHeadlinesController;
})(this);
