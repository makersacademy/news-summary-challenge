(function(exports) {
  function Article(articleList, id, url, headline, imageURL, summariser="http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=") {
    this.articleList = articleList;
    this.id = id.toString();
    this.url = url;
    this.headline = headline;
    this.summariser = summariser;
    this.content = "not yet loaded";
    this.imageURL = imageURL
  }

  Article.prototype.setContent = function() {
    return fetch(this.summariser + this.url)
    .then((response) => { return response.json(); })
    .then((json) => {
      this.content = json.text;
      return this.article;
    });
  };

  exports.Article = Article;
})(this);
