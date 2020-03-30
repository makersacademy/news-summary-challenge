(function(exports) {
  function ArticleListView(articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.htmlIfy = function() {
    var array = [];
    for (
      var article = 0;
      article < this.articleList.showArticles().length;
      article++
    ) {
      array.push(
        "<div id='article'><img src='" +
          this.articleList.showArticles()[article].showImage() +
          "'/><br>" +
          "<a href='" +
          this.articleList.showArticles()[article].showUrl() +
          "'>" +
          this.articleList.showArticles()[article].showHeadline() +
          "</a></div>"
      );
    }
    return array.join("");
  };

  exports.ArticleListView = ArticleListView;
})(this);
