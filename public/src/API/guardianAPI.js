'use strict';

;(function (exports) {
  
  // var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/';
  var url = 'http://content.guardianapis.com/';

  function parseQueryParams(params) {
    var query = [];
    Object.keys(params).forEach(function (key) {
      query.push(key + '=' + params[key]);
    })
    return query.join('&');
  }
  
  function search(params, callback, id = '') {
    
    if (id) var id = id + '?';
    
    var xhr = new XMLHttpRequest();
    var request = url + id + parseQueryParams(params)+'&api-key=5d478b85-06aa-4888-95e3-d407910c480c';

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

  exports.guardianAPI = {
    search: search
  };
  
})(this);
