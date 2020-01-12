(function(exports) {
  function GuardianApi() {};

  GuardianApi.prototype = {
    getUrl: function(today = new Date().toISOString().slice(0, 10)) {
      var api = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
      var guardianApi = "http://content.guardianapis.com/";
      var query = `search?section=uk-news%26from-date=${today}%26show-fields=headline,thumbnail`;
      return api + guardianApi + query
    },

    getHeadlines: function() {
      var url = this.getUrl();
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var response = JSON.parse(xhttp.responseText);
          return response;
        }
      }
      xhttp.open("GET", url, true);
      xhttp.send();
    }

  };

  exports.GuardianApi = GuardianApi;

})(this);
