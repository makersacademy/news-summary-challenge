(function(exports){

  function Article(title){
    this.title = title;
  }


  Article.prototype.showTitle = function(){
    return(this.title)
  }

  exports.Article = Article;

})(this);
