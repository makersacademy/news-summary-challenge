'use strict';

var request = new XMLHttpRequest();

request.open('GET', 'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&q=uk&page-size=12');
request.responseType = 'json';
request.send();
var list = new NewsList;
var api = [];

request.onload = function() {
  api = request.response.response.results;
   for(i = 0; i < api.length; i++) {
    // order consists of: headline (webTitle), date (webPublicationDate), url (webUrl), content (fields.body)
    list.addToList(api[i].webTitle, api[i].webPublicationDate), api[i].webUrl, api[i].fields.body;
    console.log("saved")
  }

   (function() {
    var headlines = document.getElementById('headlines');
    var listView = new NewsListView(newsList);
    headlines.innerHTML = listView.htmlStringify();
  })();
 };

// var AYLIENTextAPI = require('aylien_textapi');
// var textapi = new AYLIENTextAPI({
//   application_id: "YOUR_APP_ID",
//   application_key: "YOUR_APP_KEY"
// });

// textapi.sentiment({
//   'text': 'John is a very good football player!'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//   }
// });

// curl https://api.aylien.com/api/v1/summarize 
//    -H "X-AYLIEN-TextAPI-Application-Key: YOUR_APP_KEY" \
//    -H "X-AYLIEN-TextAPI-Application-ID: YOUR_APP_ID" \
//    -d sentences_number=3 \
//    -d url="http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate"
