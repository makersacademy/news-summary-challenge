(function(exports) {


 function guardianAPI (url, resultsCallback, errorCallback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var parsed = JSON.parse(xhr.responseText);
          if (parsed.response){
            resultsCallback(parsed.response.results);
          }else{
            errorCallback("Error: Didn't receive expected results\n" + xhr.responseText);
          }
      };
  };
  xhr.open('GET', url, true);
  xhr.send();
};

function aylienAPI (url, resultsCallback, errorCallback) {
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
  xhr.send();
};

exports.guardianAPI = guardianAPI;
exports.aylienAPI = aylienAPI;
})(this);
