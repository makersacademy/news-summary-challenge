class ArticleService {
  constructor(newsAPIHost = "http://content.guardianapis.com") {
    this.newsAPIHost = newsAPIHost
    this.xhttp = new XMLHttpRequest()
  }

  getTodaysArticles() {
    let path = '/search'
    let queryStr = '?from-date=2020-10-18&show-elements=image&show-fields=headline%2Cthumbnail%2Cshort-url&api-key=test'
    this.xhttp.open("GET", this.newsAPIHost + path + queryStr, true);
    this.xhttp.send();
  }
}