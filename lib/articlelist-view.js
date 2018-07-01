(function(exports) {

  function ArticleListView(articlelist) {
    this.articlelist = articlelist;
  }

  ArticleListView.prototype = {
    htmlStringify: function () {
      var htmlString = "<ul style='list-style-type:none'>";
      this.articlelist._articles.forEach(function(article) {
        htmlString += `<li><div><img src="` + article.thumbnail() + `"><br><a href="http://localhost:8080#articles/` + article.id() + `">` + article.headline() + `</a><br><br></div></li>`
      })
      htmlString += "</ul>";
      return htmlString;
    }
  };

  exports.ArticleListView = ArticleListView;
})(this);
