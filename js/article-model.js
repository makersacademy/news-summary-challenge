(function(exports){
  function Article(content){
    this._content = content;
  }

  Article.prototype = {
    text: function(){
      return this._content;
    }
  };

  exports.Article = Article;
})(this);
