
(function(exports) {
  class Article{
    constructor(information) {
      this.headline = information.webTitle
      this.link = information.webUrl
    }
  }

  Article.createArticle = function(information) {
    return new Article(information)
  }
  exports.Article = Article
})(this)
