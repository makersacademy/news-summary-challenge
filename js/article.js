(function(exports) {
  var id = 0;
  function Article(headline, url, publicationDate) {
    this._headline = headline;
    this._url = url;
    this._publicationDate = publicationDate;
    this._id = id;
    id++;
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
    },
    id: function() {
      return this._id;
    }
  };

  exports.Article = Article;
})(this);
