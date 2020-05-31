(function(exports) {
  function ArticleListView(articleList  = new ArticleList) {
    this.articleList = articleList
  }

  ArticleListView.prototype.returnHTMLstring = function() {
    let string = '<ul>'
    this.articleList.list.forEach((item, i) => {
      string += '<li><a id="' + item.id + '" href="#articles/' + item.id + '"><div>' + item.show() + '</div></a></li>'
    });
    return string + '</ul>'
  }

  exports.ArticleListView = ArticleListView
})(this)
