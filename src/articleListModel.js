(function(exports) {
  var List = function() {
    this.articles = []
  }

  List.prototype.addArticle = function(article) {
    this.articles.push(article)
  }

  List.prototype.getArticles = function() {
    return this.articles
  }

  List.prototype.createAndAddArticle = function(url, headline, text, thumbnail) {
    var article = new Article(url, headline, text, thumbnail)
    this.addArticle(article)
  }

  List.prototype.getArticleByID = function(num) {
    var arr = this.getArticles()
    //for(var i=0;i<this.articles.length,i++) {
      if (arr[2].getID() == num) {
        return arr[2]
      }
    //}
  }

  exports.List = List;
})(this)
