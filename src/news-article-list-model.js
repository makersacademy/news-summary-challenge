(function(exports) {

  function NewsArticleListModel(NewsArticleModel, apiConnector) {
    this.NewsArticleModel = NewsArticleModel;
    this.apiConnector = apiConnector;
    this.list = [];
    this._addArticles();
  }

  NewsArticleListModel.prototype = {
    _addArticles: function() {
      var self = this;
      this.articleList = this.apiConnector.getData();
      this.articleList.forEach(function(newsArticle) {
        self.list.push(new this.NewsArticleModel(newsArticle));
      })
    },

    viewList: function() {
      return this.list;
    },

    findByArticleId: function(id) {
      return this.list.find(function(article) {
        return article.articleId == id;
      })
    }
  }

  exports.NewsArticleListModel = NewsArticleListModel;
})(this);
