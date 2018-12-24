(function(exports) {

  function ApiConnector(url) {
    this.url = url
    this.dataStore = [];
    this._connect();
  }

  ApiConnector.prototype = {
    _connect: function() {
    var self = this;
    var xhttp = new XMLHttpRequest();
      xhttp.open("GET", self.url, false);
      xhttp.onload = function () {
        var data = JSON.parse(this.response).response.results;
        data.forEach(function(element) {
          self._saveData(element);
        })
      };
      xhttp.send();
    },

    _saveData: function(data) {
      this.dataStore.push(data);
    },

    getData: function() {
      return this.dataStore;
    }
  }

  exports.ApiConnector = ApiConnector;
})(this);
