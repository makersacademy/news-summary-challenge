'use strict';

(function(exports) {

  var guardianUrl = "http://content.guardianapis.com/search?show-fields=body,headline,thumbnail&api-key=" + API_KEY

  function ApiConnector(url = guardianUrl) {
    this.dataStore = [];
    this.url = url;
    this._connect(url = this.url);
  }

  ApiConnector.prototype = {
    _connect: function(url) {
      var self = this;
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, false);
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
