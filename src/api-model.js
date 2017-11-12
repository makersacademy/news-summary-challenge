"use strict";

(function(exports) {

  var requestURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all';

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';

  request.onload = function() {
    var articles = request.response;
    console.log(articles);
    showHeadlines(articles);
  };

  request.oneerror = function(error) {
    console.error(error);
  };

  request.send();


  var showHeadlines = function(articles) {
    var headlines = articles.response.results;
    var headlineList = "";
    for (var i = 0; i < headlines.length; i++) {
      var headline = headlines[i].fields.headline;
      console.log(headline)

      headlineList += ('<br>' + headline + '</br>');
    }

    document.getElementById("headlines").innerHTML = headlineList;

  }



})(this);
