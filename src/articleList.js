(function(exports){
  function ArticleList(){
    this.list [];
  };

  ArticleList.prototype.setID = function (article) {
    article.id = this.list.indexOf(article)
  }

  ArticleList.prototype.addArticle = function (text, link, pic) {
    article = new Article (text, link, pic)
    this.list.push(article)
    this.setID(article)
  }

  ArticleList.prototype.getArticles = function () {
    return this.list;
  }

  exports.ArticleList= ArticleList;
})(this);
