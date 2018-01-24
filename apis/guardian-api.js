(function(exports) {
  function GuardianAPI(headlineList, url) {
    var headlineList = headlineList;
    var url = url || "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all"

  GuardianAPI.prototype.makeRequest = function(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var articles = JSON.parse(xhttp.responseText).response.results;
        if(callback) {
          callback(articles);
        };
      };
    };
    xhttp.open("GET", url);
    xhttp.send();
    };
  }

  exports.GuardianAPI = GuardianAPI;
})(this);
