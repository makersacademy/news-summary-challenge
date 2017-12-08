(function (exports){

  function ArticleListView (articleList = new ArticleList) {
    this.articleList_ = articleList
  }


  ArticleListView.prototype.articleList = function() {
    return this.articleList_
  }

  ArticleListView.prototype.addArticleFromView = function(id, headline, summary, inDepth, image) {
      this.articleList_.addArticle(id, headline, summary, inDepth, image)
  }



  ArticleListView.prototype.showList = function() {
      noteArray = this.articleList().list().map(function(note){
      return `<ul><li><div><a href="#articles/${article.id()}">${(article.headline())}</a></div></li></ul>`
      })
    return noteArray.join('')
  }

  exports.ArticleListView = ArticleListView

})(this);
