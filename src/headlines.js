class Headlines {
  constructor() {
    this.headlines = [];
  }

  allHeadlines() {
    return this.headlines;
  }

  newArticle(article) {
    this.headlines.push(article);
  }

  articleRequest(callback) {
    let articleRequest = new XMLHttpRequest();
    let that = this;
    articleRequest.open(
      "GET",
      "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search"
    );
    articleRequest.onload = function () {
      if (articleRequest.readyState === XMLHttpRequest.DONE) {
        if (articleRequest.status === 200) {
          let data = JSON.parse(articleRequest.responseText);
          data.response.results.map(function (article) {
            let n = new Article(article.webTitle, article.webUrl);
            return that.newArticle(n);
          });
          if (callback) {
            callback();
          }
        }
      }
    };

    articleRequest.send();
  }
}
