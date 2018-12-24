(function(exports) {

  function NewsArticleModel(newsArticle) {
    this.apiResponse = (apiResponse);
  }

  NewsArticleModel.prototype = {
    headline: function() {
      return this.apiResponse.headline;
    },

    summary: function() {
      return this.apiResponse.summary;
    }
  }

  exports.NewsArticleModel = NewsArticleModel;
})(this);
