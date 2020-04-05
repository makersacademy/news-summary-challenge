'use strict';

(function(exports) {
  function NewsList() {
    this.list = [];
  }

  NewsList.prototype.viewList = function() {
    return this.list;
  }

  NewsList.prototype.getApiData = function() {
    var list = this.list;
    var request = new XMLHttpRequest();
    var apiUrl = 'http://content.guardianapis.com/search?q=culture&from-date=2020-04-01&api-key=a1d02ea7-ada1-4f93-bf10-906a6eac506f';

    request.open('GET', apiUrl, true);
    request.onload = function() {
      var data = JSON.parse(this.response);
      data.response.results.forEach(article => {
        list.push(new NewsArticle(article.webTitle, list.length));
      })
    }
    request.send();
  }

  exports.NewsList = NewsList;

})(this)
