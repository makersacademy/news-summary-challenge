class ArticleList {
  constructor() {
    this.articles = [];
  }

  getArticleList() {
    var date = this.formatDate();
    var numberOfArticles = 0;
    var request = new XMLHttpRequest();
    //var urlAPI = "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2019-01-27&api-key=83c92f37-9271-486b-8ad7-cb7cbd35a4be"
    var urlAPI = "https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2019-01-26&api-key=690962db-172e-4bae-8562-7fee1e1fffa3";
    request.open('GET', urlAPI, true)
    request.onload = () => {
      var data = JSON.parse(request.response)
      numberOfArticles = data.response.results.length
      this.articles.push(data.response.results)
    }
    request.send()
    return numberOfArticles
  }

  // addArticle(title, url) {
  //   this.articles.push(new Article(title, url));
  // }

  formatDate() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var dateString = year + "-" + "0" + (month + 1) + "-" + date;
    return dateString;
  }

}
