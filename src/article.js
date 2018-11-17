(function(exports) {
  function Article(articleList, id, url, headline, imageURL) {
    this.articleList = articleList;
    this.id = id.toString();
    this.url = url;
    this.headline = headline;
    this.imageURL = imageURL
    this.content = "not yet loaded";
  }

  exports.Article = Article;
})(this);
