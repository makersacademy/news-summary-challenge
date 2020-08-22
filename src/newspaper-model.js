(function(exports) {
  
  const Newspaper = function() {
    this.articles = [];
  };

  Newspaper.prototype = (function() {

    function viewArticles() {
      return (this.articles);
    }
    function add(article) {
      (this.articles).push(article);
    }

    return {
      viewArticles, add
    }
  })();

  exports.Newspaper = Newspaper;
})(this);
