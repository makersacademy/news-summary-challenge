var NEWSCONTROLLERMODULE = (function(exports) {
  exports.NewsController = NewsController;

  var currentNewsController; // to be able to use this.

  function NewsController() {
    this.news = [];
    currentNewsController = this; // to be able to use this.
  };

  NewsController.prototype.getNewsContainerDiv = function() {
    return document.getElementById('newsContainerDiv');
  };

  NewsController.prototype.getContent_box = function() {
    return document.getElementById('content_box');
  };


  NewsController.prototype.startListeningForHashChange = function() {
    window.addEventListener('hashchange', e => {
      e.preventDefault();
      this.handleHashChange();
    }, false);
  };

  // When click on News Title --> hash changed --> show summary

  NewsController.prototype.handleHashChange = function() {
    var singleNewsId = window.location.hash.split('#news/')[1];
    var singleNews = ''
    this.news.forEach(function(news, i) {
      if (news.id === singleNewsId) {
        singleNews = news
      };
    })
    var singleNewsView = new SingleNewsView(singleNews)
    var summaryRepresentation = currentNewsController.getContent_box();
    summaryRepresentation.innerHTML =
      singleNewsView.HTMLSingleNewsSummaryRepresentation() // replace text by id='content_box' to summary
  };

// Using API of Guardians

  NewsController.prototype.displayNews = function() {
    var url = 'https://content.guardianapis.com/world?show-fields=thumbnail';
    var token = '&api-key=20e42f1c-8679-4373-8937-0174a354cb35';
    var request = new XMLHttpRequest();
    request.open('GET', url + token, true);

    request.onload =  function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        currentNewsController.news =
          currentNewsController.parseGuardiansResponseJSON(data);
        var containerDiv = currentNewsController.getNewsContainerDiv()
        var listView = new NewsListView(currentNewsController.news);
        containerDiv.innerHTML = listView.HTMLNewsListRepresentation();

        currentNewsController.news.forEach(function(singleNews, i) {
          currentNewsController.getSummary(singleNews, i);
        });
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
  };

  //using API of AYLIEN

  NewsController.prototype.getSummary = function(singleNews, singleNewsIndex) {
    var url = 'http://news-summary-api.herokuapp.com/aylien';
    var parameters =
      `?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${singleNews.url}`;
    var request = new XMLHttpRequest();
    var singleNewsDiv = document.getElementById(`${singleNewsIndex}`);
    request.open('GET', url + parameters, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        singleNews.summary =
          currentNewsController.parseAylienResponseJSON(data);
        var singleNewsView = new SingleNewsView(singleNews);
        singleNewsDiv.innerHTML =
          singleNewsView.HTMLSingleNewsHeadlineRepresentation();
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
  };

  //Transforms the response array to readable data

  NewsController.prototype.parseGuardiansResponseJSON = function(responseJSON) {
    var dataArray = responseJSON.response.results
    return dataArray.map(function(news) {
      return new News(
        news.webTitle,
        news.webUrl,
        'Loading summary...',
        news.fields.thumbnail,
        news.id)
    });
  };

  NewsController.prototype.parseAylienResponseJSON = function(responseJSON) {
    var dataArray = responseJSON.sentences;
    return dataArray.join('\n');
  };

  return exports;

})(this);
