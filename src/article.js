(function(exports) {
  function Article(id, headline, webURL) {
    this.id = id;
    this.headline = headline;
    this.webURL = webURL;
    this.summary = []
  }

  Article.prototype.createSummary = function(summaryArray) {
    this.summaryArray = summaryArray
    this.summaryArray.forEach((sentence) => {
      this.summary.push(sentence)
    });
  };

  exports.Article = Article;
})(this);
