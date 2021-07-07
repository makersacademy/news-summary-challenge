'use strict';

(function(exports) {

function Newspaper() {
 this._articleList = [];
};

Newspaper.prototype.addArticle = function(headline) {
  var id = this._articleList.length
  this._articleList.push(new Article(headline, id));
};

Newspaper.prototype.readArticles = function() {
  return this._articleList
};

exports.Newspaper = Newspaper;
})(this);