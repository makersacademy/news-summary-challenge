(function(exports) {
  const Newspaper = function() {
    this.articles = [];
  };

  Newspaper.prototype = (function() {

    function viewArticles() {
      return this.articles;
    }

    return {
      viewArticles
    }
  })();

  exports.Newspaper = Newspaper;
})(this);
