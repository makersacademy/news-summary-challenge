(function(exports) {
  function Api() {
    this._query = 'search';
    this._baseUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/'
    this._response = '';
  };

  Api.prototype.get = function (url = this.getUrl()) {
    var that = this;
    return _get(url)
      .then(function(response) {
        that.storeResponse(JSON.parse(response));
      })
      .then(function(response) {
        return that.parseResponse();
      })
      .catch(function(error) {
        console.log("Failed!", error);
      });
  };


  Api.prototype.parseResponse = function () {
    var output = []
    this.getResponse().forEach(function(element) {
      output.push(element.webTitle);
    })
    return output;
  };

  Api.prototype.getResponse = function () {
    return this._response.response.results;
  };

  Api.prototype.storeResponse = function (response) {
    this._response = response;
  };

  Api.prototype.getUrl = function () {
    return this._baseUrl + this._query;
  };

  Api.prototype.setUrl = function (query) {
    this._query = query;
  };

  function _get(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url);

      request.onload = function() {
        if(request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        };
      };

      request.onerror = function() {
        reject(Error("Network Error"));
      };

      request.send();
    });
  };

  exports.Api = Api;
})(this);
