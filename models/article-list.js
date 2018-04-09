function ArticleList() {
  this.articles = []
  this.send
}

ArticleList.prototype = {

  addArticle: function (article) {
    this.articles.push(article)
  },

  getArticlesFromAPI: function (callback, source = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology') {
    var self = this
    var request = new XMLHttpRequest()
    request.onload = function() {
        this.response.response.results.forEach(element => {
          var url = element.apiUrl;
          var headline = element.webTitle;
          var date = element.webPublicationDate;
          self.addArticle(new Article(url, headline, date))
        });
        callback();
    }
    request.open('GET', source)
    request.responseType = 'json';
    request.send()
  },


  outputArticles: function () {
    return `<ul>` + this.articles.reduce((HTMLstring, article, index) => HTMLstring + `<li>` +  article.getHTML(index) + `</li>`, "") + `</ul>`
  }

}
