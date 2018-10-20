(function(exports) {
  function NewsArticle(headline) {
      this.headline = headline;
  }

  NewsArticle.prototype.returnHeadline = function () {
    return this.headline.webTitle;
  };

exports.NewsArticle = NewsArticle;
})(this);
