(function(exports) {
  'use strict';

  function SingleArticleView(article) {
    this._article = article;
  }

  SingleArticleView.prototype.render = function () {
    return `<div class="single-view-article"><img src="${this._article.image()}"><h3>${this._article.headline()}</h3><div class="article-summary">${this._article.summary()}</div><a class="view-full-article" href="${this._article.articleURL()}">View the full article</a><a class="back-button" href="/#">Go back</a></div>`
  };

  exports.SingleArticleView = SingleArticleView;

}(this));
