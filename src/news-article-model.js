(function(exports) {

  function NewsArticleModel(apiResponse) {
    this.apiResponse = (apiResponse);
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
    }
  }

  exports.NewsArticleModel = NewsArticleModel;
})(this);
