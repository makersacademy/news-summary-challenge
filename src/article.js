(function(exports) {
  function Article(id, url, headline, summariser="http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=") {
    this.id = id.toString();
    this.url = url;
    this.headline = headline;
    this.summariser = summariser;
  }

  Article.prototype.url = function() {
    return this.url;
  };
  exports.Article = Article;
})(this);
