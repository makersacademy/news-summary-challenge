(function(exports) {
  'use strict';

  function ArticleListView(articleList) {
    this._articleList = articleList;
  }

  ArticleListView.prototype.render = function () {
    var results = '';
    this._articleList.articles().forEach(function(article) {
      results += `<div><img src="${article.image()}"><a href="#articles/${article.id()}"><h3>${article.headline()}</h3></a></div>`;
    })
    return `<div>${results}</div>`
  };

  exports.ArticleListView = ArticleListView;

}(this));
