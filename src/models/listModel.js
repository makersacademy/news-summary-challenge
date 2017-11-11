'use strict';

;(function (exports) {

  exports.ListModel = function (API) {

    var articles = [];

    function fetchHeadlines() {
      var today = new Date().toISOString().slice(0, 10);
      var response = API.search({
        'search?from-date': today
      }, fetchThumbnails);
    }

    function fetchThumbnails(response) {
      var list = parseAPIResponse(response);
      list.forEach(function (article) {
        API.search({
          'show-fields': "thumbnail"
        }, saveResults, article.id)
      })
    }

    function parseAPIResponse(json) {
      return (json.response.results || json.response.content);
    }

    function saveResults(response) {
      articles.push(parseAPIResponse(response));
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
