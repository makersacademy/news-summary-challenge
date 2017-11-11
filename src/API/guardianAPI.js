'use strict';

;(function (exports) {
  
  var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/';

  function parseQueryParams(params) {
    var query = [];
    Object.keys(params).forEach(function (key) {
      query.push(key + '=' + params[key]);
    })
    return query.join('&');
  }
  
  function search(params, callback, id = '') {
    
    var queryString = parseQueryParams(params);
    var xhr = new XMLHttpRequest();

    if (id) var id = id + '?';

    xhr.onload = function () {
      if (xhr.status === 200) {
        callback(xhr.response);
      }
      else {
        alert('Request failed.  Returned status of ' + xhr.status);
      }
    };
    
    xhr.open('GET', url + id + queryString);
    xhr.responseType = "json";
    xhr.send();

  };

  exports.guardianAPI = {
    search: search
  }
  
})(this);
