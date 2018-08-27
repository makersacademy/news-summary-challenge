// 'use strict';
var request = new XMLHttpRequest();

request.open('GET', 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&q=uk&page-size=12');
request.responseType = 'json';
request.send();
var newsList = new NewsList;
var api = [];

request.onload = function() {
  api = request.response.response.results;
  for(var i = 0; i < api.length; i++) {
    // order of requests: headline (webTitle), date (webPublicationDate), url (webUrl), content (fields.body)
    newsList.addToList(api[i].webTitle, api[i].fields.body, api[i].webUrl, api[i].webPublicationDate, api[i].fields.thumbnail, api[i].fields.main);
    console.log("Latest news stories have been added to your list")
  }
  display(newsList);
};
