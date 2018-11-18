(function(exports) {
  function ListView(articleList) {
    this.articleList = articleList;
    this.class = ArticleView;
  }

  ListView.prototype.renderView = function() {
    articleViews = this.articleList.getAll().map(article => new this.class(article));
    result = articleViews.map(articleView => articleView.renderTitle()).join("")
    return `<ul>${result}</ul>`
  }

  exports.ListView = ListView;
})(this);
