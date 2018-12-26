(function(exports) {

  var idCounter = 0;

  function NewsArticleModel(apiResponse) {
    this.apiResponse = (apiResponse);
    idCounter++;
    this.articleId = idCounter;
  }

  NewsArticleModel.prototype = {
    headline: function() {
      return this.apiResponse.webTitle;
    },

    summary: function() {
      return this.apiResponse.fields.body;
    },

    thumbnail: function() {
      return this.apiResponse.fields.thumbnail;
    },

    articleId: function() {
      return this.articleId;
    }
  }

  exports.NewsArticleModel = NewsArticleModel;
})(this);
