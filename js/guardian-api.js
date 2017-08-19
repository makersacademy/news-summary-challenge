(function(exports) {
  var politicsHeadlinesURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics"
  function GuardianAPI(request) {
    this.request = request;
  };

  GuardianAPI.prototype = {
    setupAPIListener: function() {
      var self = this;
      this.request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          self._results = this.responseText;
        }
      }
    },
    makeAPIRequest: function() {
      this.request.open("GET", politicsHeadlinesURL);
      this.request.send();
    },
    results: function() {
      return this._results;
    }
  };
  exports.GuardianAPI = GuardianAPI;
})(this);
