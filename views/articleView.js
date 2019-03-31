(function (exports){
    function ArticleView (article) {
      this.article = article
    }
    ArticleView.prototype.getHTML = function () {
        return "<h1>" +
           this.article.title +
        "</h1>" +
        "<div>" +
            "<img src=\"" + this.article.image + "\" style=\"width:500px;height:300px;\">" +
            this.article.summary +
        "</div>"
    }
    exports.ArticleView = ArticleView
  })(this);