(function(exports) {
  function Article(article) {
    this.title = article['response']['content']['webTitle']
  }

  exports.Article = Article;
})(this);
