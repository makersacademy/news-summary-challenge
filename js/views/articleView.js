'use strict';

(function (exports) {
  exports.ArticleView = function () {

    function articleHTML(article) {
      html = '<div><p id="headlines">' + article.showHeadline() + '</p>' +
        '<img src="' + article.featureImage() + '"><br>' +
        '<div id="summary"> ' + article.showSummary() + '</div><br>' +
        '<a href="' + article.showUrlToFullStory() + '">Click To Read Full Story</a></div>';
      return html
    }

    return {
      articleHTML: articleHTML
    };

    var html
  };
})(this);