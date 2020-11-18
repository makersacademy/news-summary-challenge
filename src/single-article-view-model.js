(function(exports) {
  const SingleArticleView = function(article) {
    this.article = article;
  };

  SingleArticleView.prototype = (function() {

    function html() {
      return `<div>${this.article.showHeadline()}<br>${this.article.showSummary()}</div>`;
    }

    return {
      html
    }
  })();

  exports.SingleArticleView = SingleArticleView;
})(this);
