(function(exports) {

  function NewsArticleListModel(newsArticleModel) {
    this.newsArticleModel = newsArticleModel;
    this.list = [];
  }

  NewsArticleListModel.prototype = {
    addArticle: function(apiResponse) {
      var article = new this.newsArticleModel(apiResponse);
      this.list.push(article);
    }
  }

  exports.NewsArticleListModel = NewsArticleListModel;
})(this);
