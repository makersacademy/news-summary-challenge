function ArticleList() {
  this.articles = []
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
          var url = element.webUrl;
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

  // getArticleSummary: function(articleURL) {
//   // Alyien API almost out of requests, using saved summary for all articles
//   // var source = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + articleURL
//   var source = 'saved_summary.json'

//   return new Promise((resolve, reject) => {
//     var summaryRequest = new XMLHttpRequest()
//     summaryRequest.open('GET', source)
//     summaryRequest.onload = () => resolve(summaryRequest.response.sentences.join());
//     summaryRequest.onerror = () => reject(summaryRequest.statusText);
//     summaryRequest.send()
//   });
// },


  outputArticles: function () {
    return `<ul>` + this.articles.reduce((HTMLstring, article, index) => HTMLstring + `<li>` +  article.getHTML(index) + `</li>`, "") + `</ul>`
  }

}
