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

    function showSummary() {
      return (this.summary);
    }

    return {
      showHeadline, 
      showUrl,
      showSummary
    }
  })();

  exports.Article = Article;
})(this);
