(function(exports) {
  function ArticleListView(articleList  = new ArticleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.returnHTMLstring = function() {
    let string = '<ul>'
    this.articleList.listAll().forEach((item, i) => {
      string += '<li><div>' + item.show() + '</div></li>'
    });
    return string + '</ul>'
  }

  exports.ArticleListView = ArticleListView
})(this)
