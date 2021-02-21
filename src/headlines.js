class Headlines {
  constructor() {
    this.headlines = [];
  }

  allHeadlines() {
    console.log(this.headlines);
    return this.headlines;
  }

  newArticle(article) {
    this.headlines.push(article);
    console.log(this.headlines);
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
          console.log("checking data response");
          console.log(data);
          data.response.results.map(function (article) {
            let n = new Article(article.webTitle, article.webUrl);
            return that.newArticle(n);
          });
          if (callback) {
            callback();
          }
        } else {
          console.log("Article request issue");
        }
      }
    };

    articleRequest.send();
  }
}
