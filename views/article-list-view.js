(function (exports){

  function ArticleListView (articleList = new ArticleList) {
    this.articleList_ = articleList
  }

  ArticleListView.prototype.articleList = function() {
    return this.articleList_
  }

  ArticleListView.prototype.renderHTML = function() {
      noteArray = this.articleList_.list().map(function(article){
      return `<ul><li><div><a href="#articles/${article.id()}">${(article.headline())}</a></div></li></ul>`
      })
    return noteArray.join('')
  }

  exports.ArticleListView = ArticleListView

})(this);
