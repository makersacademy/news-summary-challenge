'use strict';

;(function (exports) {

  var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";

  function search(articleURL, callback) {

    var xhr = new XMLHttpRequest();
    var request = url + articleURL;

    xhr.onload = function () {
      if (xhr.status === 200) {
        callback(xhr.response);
      }
      else {
        alert('Request failed.  Returned status of ' + xhr.status);
      }
    };

    xhr.open('GET', request);
    xhr.responseType = "json";
    xhr.send();

  };

  exports.aylienAPI = {
    search: search
  };

})(this);
