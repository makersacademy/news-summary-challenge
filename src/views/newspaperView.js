(function(exports) {
  function ArticleTemplate() {

  };

  ArticleTemplate.prototype.createLink = function(article) {
    var start = '<div class="article">';
    var headline = `<div id="headline">${article.showHeadline()}</div>\n`;
    var url = `<div id="url"><a href="${article.showURL()}">Read article</a></div>\n`;
    var finish = '</div>';
    return start + headline + url + finish;
  };

  exports.ArticleTemplate = ArticleTemplate;
})(this);
