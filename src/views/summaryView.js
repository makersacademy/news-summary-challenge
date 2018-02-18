(function(exports){

  var SummaryView = function(newslog){
    this.newslog = newslog;
    this.articleUrls = ['0']
  }

  SummaryView.prototype.getArticleUrls = function(){
    console.log(1)
    this.newslog.articles.forEach(function(article){
      console.log(article)
      self.articleUrls.push(article.url)
    })
  }

  exports.SummaryView = SummaryView

})(this)
