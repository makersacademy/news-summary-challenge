(function (exports) {
  function NewspaperModel (articleModel = Article) {
    this._articles = []
    this.articleModel = Article
    this.articleCount = 0
  }

  NewspaperModel.prototype.newArticle = function (headline, url, thumbnailUrl, api) {
    this.articleCount++
    var article = new this.articleModel (this.articleCount, headline, url, thumbnailUrl, api)
    this._articles.push(article)
  };

  NewspaperModel.prototype.getAllArticles = function () {
    return this._articles;
  };

  exports.NewspaperModel = NewspaperModel

})(this)
