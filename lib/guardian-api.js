(function(exports) {
  function GuardianApi() {};

  GuardianApi.prototype = {
    getApi: function(today = new Date().toISOString().slice(0, 10)) {
      var api = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
      var guardianApi = "http://content.guardianapis.com/";
      var query = `?section=uk-news%26from-date=${today}%26show-fields=headline,thumbnail`;
      return api + guardianApi + query
    },

    getHeadlines:
  };

  exports.GuardianApi = GuardianApi;

})(this);
