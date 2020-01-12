(function(exports) {
  function Article(article) {
    this.title = article['response']['content']['webTitle']
    this.body = article['response']['content']['fields']['body']
  }

  exports.Article = Article;
})(this);
