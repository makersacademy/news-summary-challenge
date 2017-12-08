(function(exports) {
  'use strict';

  function SingleArticleView(article) {
    this._article = article;
  }

  SingleArticleView.prototype.render = function () {
    return `<div><img src="${this._article.image()}"><h3>${this._article.headline()}</h3><a href="${this._article.articleURL()}">View the full article</a><div>${this._article.summary()}</div></div>`
  };

  exports.SingleArticleView = SingleArticleView;

}(this));
