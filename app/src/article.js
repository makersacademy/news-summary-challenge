(function(exports) {
  function Article() {
    this.headline = "";
    this.body = "";
    this.datePublished = "";
    this.summary = "";
  };

  Article.prototype.loadArticleData = function(url) {
    var article = new XMLHttpRequest();
    article.open('GET', url + apiKey(), true);
    article.onload = function() {
      var articleData = JSON.parse(article.responseText);
      document.querySelector('body').appendChild(document.createElement('h1'));
      document.querySelector('h1').innerHTML = articleData.response.content.webTitle;
      document.querySelector('body').appendChild(document.createElement('div'));
      document.querySelector('div').innerHTML = articleData.response.content.blocks.body[0].bodyHtml;
    }
    article.send();
  };

  exports.Article = Article;
})(this);
