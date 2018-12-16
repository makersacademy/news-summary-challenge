(function(exports) {

  function NewsArticleModel(apiResponse) {
    this.apiResponse = JSON.parse(apiResponse);
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
