(function(exports) {
  function Article(articleList, id, url, headline, summariser="http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=") {
    this.articleList = articleList;
    this.id = id.toString();
    this.url = url;
    this.headline = headline;
    this.summariser = summariser;
    this.content = "not yet loaded";
    this._setContent();
  }

  Article.prototype._setContent = function() {
    return fetch(this.summariser + this.url)
    .then((response) => { return response.json(); })
    .then((json) => {
      this.content = json.text;
      return this.article;
    });
  };

  exports.Article = Article;
})(this);
