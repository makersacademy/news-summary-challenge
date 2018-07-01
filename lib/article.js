
'use strict';
(function(exports) {

  function Article(headline, content, url, date) {
    this._headline = headline;
    this._content = content;
    this._url = url;
    this._date = date;
    this._id = 0;
  };

  Article.prototype = {
    headline: function() {
      return this._headline;
    },

    content: function() {
      return this._content;
    },

    url: function() {
      return this._url;
    },

    date: function() {
      return this._date;
    },

    id: function() {
      return this._id;
    },
  };

  exports.Article = Article;
})(this);
