(function (exports){
    function HeadlinesView (newsArticlesList) {
      this.articles = newsArticlesList.articles
    }
    HeadlinesView.prototype.getHTML = function () {
        return this.articles.map(function(article) {
            return "<p>" + article.title + "</p>"
        }).join("")
    }
    exports.HeadlinesView = HeadlinesView
  })(this);