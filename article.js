(function(exports){
  function Article(text) {
    this.text = text;
  };

  Article.prototype = (function() {

    function content() {
      return this.text;
    };
    function articleID() {
      return this.id;
    }

    return {
      content,
      articleID
    };
  })();

  exports.Article = Article;
})(this);