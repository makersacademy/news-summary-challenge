(function(exports){

  function ArticleList(){
    this.articles = []
  }

  ArticleList.prototype.addArticle = function(article){
    this.articles.push(article)
  }

  exports.ArticleList = ArticleList;
})(this)
