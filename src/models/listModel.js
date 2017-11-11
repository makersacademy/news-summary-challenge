'use strict';

(function (exports) {

  exports.ListModel = function (API) {

    var articles = []

    function fetchHeadlines() {
      var today = new Date().toISOString().slice(0, 10);
      var response = API.search({
        'from-date': today
      });
      saveResults(response);
    }

    function parseAPIResponse(json) {
      return json.response.results;
    }

    function saveResults(response) {
      articles = parseAPIResponse(response);
    }

    function getArticle(id) {
      var index = id - 1;
      return articles[index];
    }

    return {
      fetchHeadlines: fetchHeadlines,
      getArticle: getArticle
    }

  }

})(this);
