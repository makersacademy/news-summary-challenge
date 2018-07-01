(function(exports) {
  function ArticleView(article) {
    this._article = article;
  };

  ArticleView.prototype.htmlStringify = function () {
    var htmlstring = `<div><h2>` + this._article.headline() + `</h2><button type="button" id="back">Back</button>
` + this._article.content() + `</div>`;
    return htmlstring;
  };

  exports.ArticleView = ArticleView;
})(this)
