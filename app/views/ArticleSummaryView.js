(function(exports) {
  'use strict';

  exports.ArticleSummaryView = function(articleModel) {
    var _article = articleModel;

    var toHtml = function() {
      return [
        "<div>",
          "<img src='" + _article.imageUrl() + "' />",
          "<h2>" + _article.headline + "</h2>",
          _article.summary(),
        "</div>"].join("");
    };

    return {
      toHtml: toHtml
    };
  };

})(this);
