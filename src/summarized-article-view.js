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
    //this.summary is not updating the this.summary in the initialize method
    //so it cannot get the HTML for it which means that it will not appear on page
  })
  this.getHTML(this.summary)
}

SummarizedArticle.prototype.getHTML = function(text) {
  "<div>" + text + "</div>"
}

SummarizedArticle.prototype.getSummary = function() {
  this.summarize(this.url, this.articleUrl);
};

  exports.SummarizedArticle = SummarizedArticle
})(this);
