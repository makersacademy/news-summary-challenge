(function(exports) {
  function Article(id, url, headline, summariser="http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=") {
    this.id = id.toString();
    this.url = url;
    this.headline = headline;
    this.summariser = summariser;
    this.content = "not yet loaded";
    this._setContent();
  }

  Article.prototype._setContent = function() {
    fetch(this.summariser + this.url)
    .then((response) => { return response.json(); })
    .then((json) => { this.content = json.text; });
  };

  exports.Article = Article;
})(this);
