(function(exports) {

  exports.ArticleSummaryView = function(articleModel) {
    var _article = articleModel;

    var article = function() {
      return _article;
    }

    var toHtml = function() {
      console.log(_article.summary());
      return [
        "<div>",
          "<h2>" + _article.headline + "</h2>",
          _article.summary(),
        "</div>"].join("");
    }

    return {
      article: article,
      toHtml: toHtml
    };
  };

})(this);
