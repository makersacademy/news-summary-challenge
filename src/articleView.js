(function(exports) {
  function ArticleView(articlelist) {
    this.articlelist = articlelist;
  };

  var html = ""
  ArticleView.prototype.display = function() {
    this.articlelist.list.map(function(article) {
      html += `<li><div><a href="${article.getID()}">${article.getText()}, ${article.getLink()}, ${article.getPic()}</a></div></li>`
    });
    return `<ul>${html}</ul>`
  };

exports.ArticleView = ArticleView;
})(this);
