"use strict";

(function(exports) {

var requestURL = 'https://randomuser.me/api/?results=10'
// 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all';

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';

  request.onload = function() {
    var authors = request.response;
    console.log(authors);

  };

  request.oneerror = function(error) {
    console.error(error);
  };

  request.send();

})(this);
