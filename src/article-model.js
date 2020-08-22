(function(exports) {
  const Article = function(headline, url) {
    this.headline = headline;
    this.url = url;
  };
  Article.prototype = (function() {

    function showHeadline() {
      return (this.headline);
    }

    function showUrl() {
      return (this.url);
    }

    return {
      showHeadline, showUrl
    }
  })();

  exports.Article = Article;
})(this);