(function(exports) {
  function headlineGrabber(headlines = null) {
    this._headlines = headlines;
  }

  headlineGrabber.prototype.makeRequest = function(url) {
    var newRequest = new XMLHttpRequest();
    newRequest.open("GET", url, true)
    newRequest.send();
    var response = newRequest.response
    var jsonText = JSON.parse(response);
    this._headlines = jsonText.response.results;
  };

  exports.headlineGrabber = headlineGrabber
})(this);
