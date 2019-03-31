(function (exports){
    function HeadlinesView (newsArticlesList) {
      this.articles = newsArticlesList.articles
    }
    HeadlinesView.prototype.getHTML = function () {
        return this.articles.map(function(article) {
            return "<p>" + 
            "<a href=\"#news/" + article.id + "\">" +
              "<img src=\"" + article.image + "\" style=\"width:48px;height:48px;\">" +
              article.title + "</a></p>"
        }).join("")
    }
    exports.HeadlinesView = HeadlinesView
  })(this);