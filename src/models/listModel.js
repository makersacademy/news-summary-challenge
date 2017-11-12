'use strict';

;(function (exports) {

  exports.ListModel = function (API, listController) {

    var pageNumber = 1;
    var showListItem;

    function fetchArticle(callback) {
      showListItem = callback
      var today = new Date().toISOString().slice(0, 10);
      var response = API.search({
        'search?from-date': today,
        'order-by': "newest",
        'page': pageNumber,
        'page-size': "1"
      }, fetchThumbnail);
      pageNumber++;
    }

    function fetchThumbnail(response) {
      var id = parseAPIResponse(response)[0].id;
        API.search({
          'show-fields': "thumbnail"
        }, passToController, id)
    }

    function parseAPIResponse(json) {
      return (json.response.results || json.response.content);
    }

    function passToController(response) {
      showListItem(parseAPIResponse(response));
    }

    return {
      fetchArticle: fetchArticle,
    }

  }

})(this);
