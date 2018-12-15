(function (exports) {

  function ArticleView(article) {
    this.article = article;
  }

  ArticleView.prototype.htmlString = function() {
    var string = "";

    string += "<div><img src='";
    string += this.article.thumbnail;
    string += "' alt='article thumbnail'><h1>";
    string += this.article.headline;
    string += "</h1><p>"
    string += this.article.firstParagraph
    string += "</p><p>"
    string += this.article.secondParagraph
    string += "</p><p>"
    string += this.article.thirdParagraph
    string += "</p><a href='"
    string += this.article.url
    string += "'>Click here for the full Guardian article</a></div>"

    return string;
  }

  exports.ArticleView = ArticleView;
})(this);
