(function(exports) {
  function SummarizedArticle(articleUrl) {
    this.articleUrl = articleUrl;
    this.url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
    this.summary = ""
  }

SummarizedArticle.prototype.summarize = function(url, articleUrl) {
  fetch(url + articleUrl + "&sentences_number=5")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    this.summary = data.text
    console.log(this.summary)
  })
}

SummarizedArticle.prototype.getSummary = function() {
  this.summarize(this.url, this.articleUrl);
};

  exports.SummarizedArticle = SummarizedArticle
})(this);
