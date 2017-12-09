(function(exports) {
  'use strict';

  var id = 0;

  function Article(headline, image, summary, articleURL) {
    this._id = id;
    id++;
    this._headline = headline;
    this._image = image;
    this._summary = summary;
    this._articleURL = articleURL;
  }

  Article.prototype = {
    id: function() {
      return this._id;
    },
    headline: function() {
      return this._headline;
    },
    image: function() {
      return this._image;
    },
    summary: function() {
      return this._summary;
    },
    articleURL: function() {
      return this._articleURL;
    },
  }

  exports.Article = Article;
}(this));
