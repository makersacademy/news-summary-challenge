(function(exports){
  function Newspaper() {
    this.contents = [];
  };

  Newspaper.prototype = (function() {

    function articles() {
      return this.contents;
    };
    
    function addArticle(articleText) {
      let article = new Article(articleText);
      this.articles().push(article);
    }

    return {
      articles,
      addArticle
    };
  })();

  exports.Newspaper = Newspaper;
})(this);
