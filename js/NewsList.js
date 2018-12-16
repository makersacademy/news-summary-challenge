const dotEnv = require('dotenv').config();
const apiUrl = process.env.API_URL;

(function (exports) {

  function NewsList() {
    this.allNews = []
  }

  // pushes a news inside the allNews Array
  NewsList.prototype.addNews = function(news) {
    this.allNews.push(news);
  };

  // sends a request to the guardian API to retrieve webTitle and webUrl as response
  NewsList.prototype.importNews = function(headline, webUrl) {
    var request = new XMLHttpRequest();
    var api = new Api(url)
    var self = this;

    request.open("GET", apiUrl, true);

    request.onload = function() {
      var data = JSON.parse(request.responseText)
      data.response.results.forEach(function(result) {
        self.addNews(new news(result.webTitle, result.webUrl));
      });
    };

    request.send();
  };

  // selects a single news by id
  NewsList.prototype.findById = function(id) {
    return this.allNews.find(function(news) {
      return news.id == id
    })
  };

  // NewsList.prototype.all = function() {
  //   return this.newsBox
  // };

  exports.NewsList = NewsList

})(this);
