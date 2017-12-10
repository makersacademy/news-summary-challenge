(function (exports) {
  function HttpRequestController (apiKey, xmlHttpRequest = XMLHttpRequest) {
    this.apiKey = apiKey;
    this.request = new xmlHttpRequest ()
  }

  HttpRequestController.prototype.sendRequest = function (requestedUrl, request = this.request) {
    request.open('GET', requestedUrl)
    request.send()
  };

  HttpRequestController.prototype.convertToJSON = function (string) {
    return JSON.parse(string)
  };

  exports.HttpRequestController = HttpRequestController

})(this)
