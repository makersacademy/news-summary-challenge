'use strict';

;(function (exports) {

  exports.ListModel = function (API) {

    var articles = []

    function fetchHeadlines() {
      var today = new Date().toISOString().slice(0, 10);
      var response = API.search({
        'from-date': today,
        'show-fields': "thumbnail"
      });
      saveResults(response);
    }

    function parseAPIResponse(json) {
      return json.response.results;
    }

    function saveResults(response) {
      articles = parseAPIResponse(response);
    }

    function getItem(id) {
      id--;
      return articles[id];
    }

    return {
      fetchHeadlines: fetchHeadlines,
      getItem: getItem
    }

  }

})(this);
