(function(exports) {

  function NewsArticleListModel(NewsArticleModel, apiConnector) {
    this.NewsArticleModel = NewsArticleModel;
    this.apiConnector = apiConnector;
    this.articleList = [];
  }

  NewsArticleListModel.prototype = {
    getArticleList: function() {
      var self = this;
      this.apiData = this.apiConnector.getData();
      this.apiData.forEach(function(newsArticle) {
        self.articleList.push(new this.NewsArticleModel(newsArticle));
      })
    },

    findByArticleId: function(id) {
      return this.articleList.find(function(article) {
        return article.articleId == id;
      })
    },

    viewArticleList: function() {
      return this.articleList;
    }
  }

  exports.NewsArticleListModel = NewsArticleListModel;
})(this);
