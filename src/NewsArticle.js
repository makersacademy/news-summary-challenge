(function(exports) {
  function NewsArticle(headline) {
      this.headline = headline;
  }

  NewsArticle.prototype.returnHeadLine = function () {
    return this.headline;
  };

exports.NewsArticle = NewsArticle;
})(this);
