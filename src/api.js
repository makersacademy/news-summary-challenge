"use strict";
;(function(exports) {

function callAPI (url, resultsCallBack, asynchronous, customHeaders={}) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var parsed = JSON.parse(xhr.responseText);
          resultsCallBack(parsed, xhr);
      };
  };
  xhr.open('GET', url, asynchronous);
  for(var headerName in customHeaders){
    xhr.setRequestHeader(headerName, customHeaders[headerName]);
  }
  xhr.send();
};

function guardianAPI (url) {
  var results = [];
  var resultsCallback = function(parsed, xhr) {
    if (parsed.response){
      results = parsed.response.results;
    }else{
      console.log("Error: Didn't receive expected results\n" + xhr.responseText);
    }
  };
  callAPI(url, resultsCallback, false);
  return results;
};

function aylienAPI (url, resultsCallback, errorCallback) {
  var aylienResultsCallback = function(parsed, xhr) {
    if (parsed){
      resultsCallback(parsed);
    }else{
      errorCallback("Error: Didn't receive expected results\n" + xhr.responseText);
    }
  };
  var customHeaders = {};
  // customHeaders[Settings.aylienIDHeaderName] = Settings.aylienID;
  // customHeaders[Settings.aylienKeyHeaderName] = Settings.aylienKey;
  callAPI(url, aylienResultsCallback, true, customHeaders);
};

exports.guardianAPI = guardianAPI;
exports.aylienAPI = aylienAPI;
})(this);
