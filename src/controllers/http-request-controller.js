(function (exports) {
  function HttpRequestController (apiKey, xmlHttpRequest = XMLHttpRequest) {
    this.apiKey = apiKey;
    this.request = new xmlHttpRequest ()
  }

  HttpRequestController.prototype.sendRequest = function (httpRequestController = this) {
    httpRequestController.request.open('GET', `http://content.guardianapis.com/search?production-office=UK&order-by=newest&show-fields=thumbnail%2Cheadline&page-size=20&q=politics&api-key=${httpRequestController.apiKey}`, false)
    httpRequestController.request.send()
  };

  HttpRequestController.prototype.convertToJSON = function (string) {
    return JSON.parse(string)
  };

  exports.HttpRequestController = HttpRequestController

})(this)
