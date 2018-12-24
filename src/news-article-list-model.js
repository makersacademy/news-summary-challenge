(function(exports) {

  function NewsArticleListModel(NewsArticleModel, apiConnector) {
    this.NewsArticleModel = NewsArticleModel;
    this.apiConnector = apiConnector;
    this.list = [];
    this.addArticles();
  }

  NewsArticleListModel.prototype = {
    addArticles: function() {
      var self = this;
      this.articleList = this.apiConnector.getData();
      this.articleList.forEach(function(newsArticle) {
        self.list.push(new this.NewsArticleModel(newsArticle));
      })
    },

    viewList: function() {
      return this.list;
    }
  }

  exports.NewsArticleListModel = NewsArticleListModel;
})(this);
