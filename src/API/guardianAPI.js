'use strict';

;(function (exports) {
  
  var url = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/';

  function parseQueryParams(options) {
    var params = [];
    Object.keys(options).forEach(function (key) {
      params.push(key + '=' + options[key]);
    })
    return params.join('&');
  }
  
  function search(options) {
    
    var params = 'search?' + parseQueryParams(options);
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url + params, false);
    xhr.responseType = "json";
    // xhr.onreadystatechange = function () {
    //   if (xhr.status === 200) {
    //     return xhr.responseText;
    //   }
    //   else {
    //     alert('Request failed.  Returned status of ' + xhr.status);
    //   }
    // };
    xhr.send();
    return xhr.response;
  };

  exports.guardianAPI = {
    search: search
  }
  
})(this);
