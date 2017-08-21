'use strict';

(function(exports) {
  var id = 0;
  function Article(headline, url, publicationDate, thumbnail) {
    this._headline = headline;
    this._url = url;
    this._publicationDate = publicationDate;
    this._thumbnail = thumbnail;
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
    thumbnail: function() {
      return this._thumbnail;
    },
    id: function() {
      return this._id;
    },
    addSummary: function(content) {
      this._summary = content;
    },
    summary: function() {
      return this._summary;
    }
  };

  exports.Article = Article;
})(this);
