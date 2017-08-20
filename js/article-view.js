(function(exports) {
  function ArticleView() {}

  ArticleView.prototype = {
    returnHTML: function(article) {
      return ["<h1>" + article.headline() + "</h1>",
              "<div id='article-text'><p>",
              article.summary(),
              "</p></div>"].join("");
    }
  };

  exports.ArticleView = ArticleView;
})(this);
