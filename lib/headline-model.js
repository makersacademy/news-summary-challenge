(function(exports) {
  var id = 1;

  function Article(headline, image) {
    this._id = id++
    this._headline = headline;
    this._image = image;
  };

  Article.prototype.get = function () {
    return {
      id: this._id,
      headline: this._headline,
      image: this._image
    }
  };

  exports.Article = Article;
})(this);
