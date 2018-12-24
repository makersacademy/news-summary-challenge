(function(exports) {

  function NewsArticleListModel(newsArticleModel) {
    this.newsArticleModel = newsArticleModel;
    this.list = [];
  }

  NewsArticleListModel.prototype = {
    addArticle: function(newsArticle) {
      var article = new this.newsArticleModel(newsArticle);
      this.list.push(article);
    },

    viewList: function() {
      return this.list
    }
  }

  exports.NewsArticleListModel = NewsArticleListModel;
})(this);
