"use strict";

(function (exports) {
  function ArticleListView(articleList) {
    this._articleList = articleList;
  }

  ArticleListView.prototype.getArticleList = function() {
    return this._articleList;
  }

  function _addTag(text, tag, attribute = "") {
    return `<${tag}${attribute}>` + text + `</${tag}>`
  }

  ArticleListView.prototype.getListHTML = function() {
    var listHTML = "";
    this.getArticleList().getArticles().forEach(function(article) {
      listHTML += _addTag((_addTag(article.getArticleTitle(),"a", ` href=#${article.getId()}`)),"li");
    })
    return _addTag(listHTML, "ul");
  }

  exports.ArticleListView = ArticleListView;
})(this);
