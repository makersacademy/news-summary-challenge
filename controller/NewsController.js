var NEWSCONTROLLERMODULE = (function(exports) {
  exports.NewsController = NewsController;
  function NewsController() {
    this.news = [];
  };

  NewsController.prototype.getnewsContainerDiv = function() {
    return document.getElementById('newsContainerDiv');
  };

  NewsController.prototype.displayNews = function() {
    var url = 'https://content.guardianapis.com/world?show-fields=thumbnail';
    var token = '&api-key=20e42f1c-8679-4373-8937-0174a354cb35';
    var request = new XMLHttpRequest();
    var containerDiv = this.getnewsContainerDiv();
    var parseGuardiansResponseJSON = this.parseGuardiansResponseJSON;
    request.open('GET', url + token, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        this.news = parseGuardiansResponseJSON(data)
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  };

  NewsController.prototype.getSummary = function(news) {
    var url = 'https://api.aylien.com/api/v1/summarize';
    var parameters = `?sentences_number=4&url=${news.url}`;
    var request = new XMLHttpRequest();
    var parseAylienResponseJSON = this.parseAylienResponseJSON;
    request.setRequestHeader('X-AYLIEN-TextAPI-Application-ID', 'd518e8f2');
    request.setRequestHeader('X-AYLIEN-TextAPI-Application-Key', 'fd010efab569c8cb4bd73de48f2aab6c');
    request.open('GET', url + parameters, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        news.summary = parseAylienResponseJSON(data);
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  };

  NewsController.prototype.parseGuardiansResponseJSON = function(responseJSON) {
    var dataArray = responseJSON.response.results
    return dataArray.map(function(news) {
      return new News(news.webTitle, news.webUrl, 'summary', news.fields.thumbnail)
    });
  };

  NewsController.prototype.parseAylienResponseJSON = function(responseJSON) {
    var dataArray = responseJSON.sentences;
    return dataArray.join('\n');
  };

  return exports;

})(this);
