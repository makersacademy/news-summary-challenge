class ArticleController {
  constructor(newsAPIHost = "http://content.guardianapis.com") {
    this.newsAPIHost = newsAPIHost
  }

  getTodaysArticles(callback) {
    let xhttp = new XMLHttpRequest();
    let path = '/search';
    let queryStr = `?from-date=${this._getTodaysDate()}&show-elements=image&show-fields=headline%2Cthumbnail%2Cshort-url&api-key=test`;
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        let articles = this._convertToArticles(xhttp.responseText);
        callback(articles);
      }
    }.bind(this);
    xhttp.open("GET", this.newsAPIHost + path + queryStr, true);
    xhttp.send();
  }

  _convertToArticles(res) {
    let resArticles = JSON.parse(res).response.results;
    let articles = [];
    resArticles.forEach(function(article) {
      let articleObj = new Article(article.id, article.fields.headline, article.fields.thumbnail, article.fields.shortUrl);
      articles.push(articleObj);
    })
    return articles;
  }

  _getTodaysDate() {
    return new Date().toISOString().slice(0, 10);
  }
}