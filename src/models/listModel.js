'use strict';

;(function (exports) {

  exports.ListModel = function (API, listController) {

    var pageNumber = 1;
    var fetchedArticles = [];
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
    };

    function fetchThumbnail(response) {
      var id = parseAPIResponse(response)[0].id;
      API.search({
        'show-fields': "thumbnail"
      }, fetchSummary, id);
    };

    function fetchSummary(response) {
      var article = parseAPIResponse(response);
      fetchedArticles.push(article);
      showListItem(article);
    };

    function parseAPIResponse(json) {
      return (json.response.results || json.response.content);
    };


    return {
      fetchArticle: fetchArticle,
    };

  };

})(this);
