(function (exports) {

  function ArticleView(article) {
    this.article = article;
  }

  ArticleView.prototype.htmlString = function() {
    var string = "";

    string += "<div><h2>";
    string += this.article.section;
    string += "</h2>";
    if (this.article.thumbnail != undefined) {
      string += "<img src='";
      string += this.article.thumbnail;
      string += "' alt='article thumbnail'>";
    }
    string += "<h1>";
    string += this.article.headline;
    string += "</h1><h2>by "
    string += this.article.byline
    string += "</h2><p>"
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
