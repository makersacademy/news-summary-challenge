(function (exports) {
  class ArticleList {
    constructor(ArticleClass = Article) {
      this._articles = []
      this._ArticleClass = Article;
    };

    articles() {
      return this._articles;
    };

    addArticle(title, url) {
      this._articles.push(new this._ArticleClass(title, url));
    };
  };

  exports.ArticleList = ArticleList;
})(this);
