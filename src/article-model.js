(function(exports){

  function Article(headline){
    this.headline = headline;
  }


  Article.prototype.showHeadline = function(){
    return(this.headline);
  }

  exports.Article = Article;

})(this);
