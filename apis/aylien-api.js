(function(exports) {
  function AylienAPI() { }

  AylienAPI.prototype.makeRequest = function(callback, articleURL) {
    var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + articleURL + "&sentences_number=5"
    var ApiID = "9c21a3c5"
    var ApiKey = "0c6917a152e2a6c6a4742fb6ca7ddcac"
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var summary = JSON.parse(xhttp.responseText);
        if(callback) {
          console.log(summary)
          callback(summary);
        };
      };
    };
    xhttp.open("GET", url, true, ApiID, ApiKey);
    xhttp.setRequestHeader("Accept", "application/json")
    xhttp.send();
  };

  exports.AylienAPI = AylienAPI;
})(this);
