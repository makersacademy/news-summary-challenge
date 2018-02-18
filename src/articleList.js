(function(exports){

  function ArticleList(){
    this.articles = []
  }

  ArticleList.prototype.addArticle = function(article){
    this.articles.push(article)
  }

  ArticleList.prototype.listArticles = function(){
    return this.articles
  }

  ArticleList.prototype.listArticleById = function(number){
    var element = this.listArticles()
    return element[number]
  }

  exports.ArticleList = ArticleList;
})(this)
