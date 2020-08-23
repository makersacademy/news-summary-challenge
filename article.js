(function(exports){
  function Article(title, url) {
    this.title = title;
    this.url = url
  };

  Article.prototype = (function() {

    function articleTitle() {
      return this.title;
    };
    function articleURL() {
      return this.url;
    };
    function articleID() {
      return this.id;
    }

    return {
      articleTitle,
      articleURL,
      articleID
    };
  })();

  exports.Article = Article;
})(this);