'use strict';

(function (exports) {
  exports.ArticleView = function () {

    function articleHTML(article) {
      html = '<div><p id="headlines">' + article.showHeadline() + '</p>' +
        '<img src="' + article.featureImage() + '"><br>' +
        '<p id="summary"> ' + article.showSummary() + '</p><br>' +
        '<p><a href="' + article.showUrlToFullStory() + '">Click To Read Full Story</a></p></div>';
      return html
    }

    return {
      articleHTML: articleHTML
    };

    var html
  };
})(this);