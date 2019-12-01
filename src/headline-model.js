(function (exports) {
  function Headline(title, article, imageLink) {
    this.title = title;
    this.article = article;
    this.imageLink = imageLink
  }

  Headline.prototype.returnTitle = function () {
    return this.title
  };

  Headline.prototype.returnArticle = function () {
    return this.article
  };

  Headline.prototype.returnImageLink = function () {
    return this.imageLink
  };

  exports.Headline = Headline
})(this)
