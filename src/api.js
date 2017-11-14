"use strict"; 

;(function(exports) {


 function guardianAPI (url) {
   var results = [];
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var parsed = JSON.parse(xhr.responseText);
          if (parsed.response){
            results = parsed.response.results;
          }else{
            console.log("Error: Didn't receive expected results\n" + xhr.responseText);
          }
      };
  };
  xhr.open('GET', url, false);
  xhr.send();
  return results;
};

function aylienAPI (url, resultsCallback, errorCallback) {
  var aylienIDHeaderName = "X-AYLIEN-TextAPI-Application-ID"
  var aylienID = "c11989db";
  var aylienKeyHeaderName = "X-AYLIEN-TextAPI-Application-Key"
  var aylienKey = "cac51db271ef8cf0ad06f08e10c4d03c";

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var parsed = JSON.parse(xhr.responseText);
      if (parsed){
        resultsCallback(parsed);
      }else{
        errorCallback("Error: Didn't receive expected results\n" + xhr.responseText);
      }
    };
  };
  xhr.open('GET', url, true);
  xhr.setRequestHeader(aylienIDHeaderName, aylienID);
  xhr.setRequestHeader(aylienKeyHeaderName, aylienKey);
  xhr.send();
};

exports.guardianAPI = guardianAPI;
exports.aylienAPI = aylienAPI;
})(this);
