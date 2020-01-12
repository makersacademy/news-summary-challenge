(function(exports) {
  let idCounter = 0
  function Article(article, summary) {
    this.title = article['response']['content']['webTitle']
    this.body = article['response']['content']['fields']['body']
    this.summary = summary
    this.id = idCounter++
  }

  Article.prototype.readTitle = function() {
    return this.title;
  }

  Article.prototype.readBody = function() {
    return this.body;
  }

  Article.prototype.readSummary = function() {
    return this.summary.sentences.join(' ');
  }

  exports.Article = Article;
})(this);
