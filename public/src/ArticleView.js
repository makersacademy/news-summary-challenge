"use strict";

(function(exports) {
  function ArticleView(article) {
    this._article = article
  }

  ArticleView.prototype.getArticle = function() {
    return this._article
  };

  function _addTag(text, tag) {
    return `<${tag}>` + text + `</${tag}>`
  }

  ArticleView.prototype.getArticleHTML = function() {
    return this.getArticleHeaderHTML() + _addTag(this.getArticle().getBody(),"div")
  }

  ArticleView.prototype.getArticleHeaderHTML = function() {
    return _addTag("Current Article", "h2")
  }

  exports.ArticleView = ArticleView
})(this)
