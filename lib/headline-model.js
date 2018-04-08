(function(exports) {
  function Article(headline, image) {
    this._headline = headline;
    this._image = image;
  };

  Article.prototype.get = function () {
    return {
      headline: this._headline,
      image: this._image
    }
  };

  exports.Article = Article;
})(this);
