class ArticleList {
  constructor() {
    this.articles = [];
  }

  getArticleList() {
    var request = new XMLHttpRequest();
    var urlAPI = "https://content.guardianapis.com/search?tag=technology/technology&api-key=x&show-fields=thumbnail";
    request.open('GET', urlAPI, true);
    request.onload = function () {
      var result = JSON.parse(this.response);    }
    request.send();
  })
