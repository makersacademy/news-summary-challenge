
(function (exports) {
  class Article {
    constructor(information) {
      this.headline = information.webTitle;
      this.link = information.webUrl;
      this.image = information.fields.thumbnail
    }
  }

  Article.createArticle = function (information) {
    return new Article(information);
  };
  exports.Article = Article;
}(this));
