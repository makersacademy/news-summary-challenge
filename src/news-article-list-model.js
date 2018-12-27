(function(exports) {

  function NewsArticleListModel(NewsArticleModel, ApiConnector) {
    this.NewsArticleModel = NewsArticleModel;
    this.ApiConnector = ApiConnector;
    this.articleList = [];
  }

  NewsArticleListModel.prototype = {
    getArticleList: function() {
      var self = this;
      var guardianQueryUrl = "http://content.guardianapis.com/search?show-fields=body,headline,thumbnail&api-key=" + YOUR_API_KEY
      var apiConnector = new this.ApiConnector();
      apiConnector.connect(guardianQueryUrl)
      this.apiData = apiConnector.getData();
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
