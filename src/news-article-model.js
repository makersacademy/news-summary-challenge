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
    }
  }

  exports.NewsArticleModel = NewsArticleModel;
})(this);
