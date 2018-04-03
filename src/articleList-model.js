function ArticleList() {
  this.articles = []
}

ArticleList.prototype = {

  addArticle: function (article) {
    this.articles.push(article)
  },

  getArticlesFromAPI: function (source = 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology') {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest()
      request.open('GET', source)
      request.responseType = 'json';
      request.onload = () => {
        if (request.status == 200) {
          resolve(request.response);
        }
        else {
          reject(Error(request.statusText));
        }
      }
      request.send()
    });
  },

  outputArticles: function () {
    return `<ul>` + this.articles.reduce((HTMLstring, article, index) => HTMLstring + `<li>` + article.getHTML(index) + `</li>`, "") + `</ul>`
  }

}
