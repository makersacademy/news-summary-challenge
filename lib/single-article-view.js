(function(exports) {
  function ArticleView(article) {
    this._article = article;
  };

  ArticleView.prototype.render = function () {
    return "<div><img src =" + this._article.get().image + "></img></div><div>" + this._article.get().headline + "</a></div>";
  };

  exports.ArticleView = ArticleView;
})(this);
