(function (exports){
    function HeadlinesView (newsArticlesList) {
      this.articles = newsArticlesList.articles
    }
    HeadlinesView.prototype.getHTML = function () {
        return this.articles.map(function(article) {
            return "<p>" + 
              "<img src=\"" + article.image + "\" style=\"width:48px;height:48px;\">" +
              article.title + "</p>"
        }).join("")
    }
    exports.HeadlinesView = HeadlinesView
  })(this);