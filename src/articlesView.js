(function(exports) {

  function ArticlesView(articlesList) {
    this.articlesList = articlesList.list;
  }

  ArticlesView.prototype.getHTML = function() {
    var articlesHTML = []
    this.articlesList.forEach(function(article) {
      articlesHTML.push("<li><div><a href=" + article.url + " target='_blank'><h4>" + article.headline + "</h4></a><img src=" + article.img + "></div></li>")
    });
    return articlesHTML.join("");
  }

  exports.ArticlesView = ArticlesView;
})(this)
