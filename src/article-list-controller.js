(function (exports) {
  class ArticleListController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(ArticleList), request = new XMLHttpRequest()) {
      this._articleList = articleList;
      this._articleListView = articleListView;
      this._apiRequest = apiRequest;
    };
  };

exports.ArticleListController = ArticleListController;
})(this);
