(function(exports){
  function Article(text) {
    this.text = text;
  };

  Article.prototype = (function() {

    function content() {
      return this.text;
    };

    return {
      content
    };
  })();

  exports.Article = Article;
})(this);