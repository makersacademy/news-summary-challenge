(function(exports) {
  function Article(headline, url, publicationDate) {
    this._headline = headline;
    this._url = url;
    this._publicationDate = publicationDate;
  }
  Article.prototype = {
    headline: function() {
      return this._headline;
    },
    url: function() {
      return this._url;
    },
    publicationDate: function() {
      return this._publicationDate;
    }
  };

  exports.Article = Article;
})(this);
