(function(exports) {

  function ApiConnector() {
    this.dataStore = [];
    this.connect();
  }

  ApiConnector.prototype = {
    connect: function() {
    var self = this;
    var url = "http://content.guardianapis.com/search?show-fields=body,headline,thumbnail&api-key=88771be1-78d1-463a-b3aa-88d7364df580";
    var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, false);
      xhttp.onload = function () {
        var data = JSON.parse(this.response).response.results;
        data.forEach(function(element) {
          self.saveData(element);
        })
      };
      xhttp.send();
    },

    saveData: function(data) {
      this.dataStore.push(data);
    },

    getData: function() {
      return this.dataStore;
    }
  }

  exports.ApiConnector = ApiConnector;
})(this);
