(function(exports){
  function Article(text, id){
    this.text_ = text
    this.id = 0
  }

  Article.prototype.text = function (){
    return this.text_
  }

  exports.Article = Article

})(this)
