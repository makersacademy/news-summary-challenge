(function(exports) {
  const Article = function(headline) {
    this.headline = headline;
  }
  Article.prototype = (function() {

    function showHeadline() {
      return this.headline;
    };

    return {
      showHeadline
    };
  })();

  exports.Article = Article;
})(this);