(function(exports) {

  function ArticleListView(articlelist) {
    this.articlelist = articlelist;
  }

  ArticleListView.prototype = {
    htmlStringify: function () {
      var htmlString = "<ul>";
      this.articlelist._articles.forEach(function(article) {
        htmlString += `<li><div><a href="http://localhost:8080#articles/` + article.id() + `">` + article.headline() + `</a></div></li>`
      })
      htmlString += "</ul>";
      return htmlString;
    }
  };

  exports.ArticleListView = ArticleListView;
})(this);
