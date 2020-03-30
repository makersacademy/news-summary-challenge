(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.htmlIfy = function() {
    var array = ["<ul>"];
    for (
      var article = 0;
      article < this.articleList.showArticles().length;
      article++
    ) {
      array.push(
        "<div>" +
          "<a href='" +
          this.articleList.showArticles()[article].showUrl() +
          "'>" +
          this.articleList.showArticles()[article].showHeadline() +
          "</a></div>"
      );
    }
    array.push("</ul>");
    return array.join("");
  };

  exports.ArticleListView = ArticleListView;
})(this);
