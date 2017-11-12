'use strict';

;(function (exports) {

  exports.ListModel = function (API, listController) {

    var _pageNumber = 1;
    var _articleIndex = 0;
    var fetchedArticles = [];
    var showListItem;

    function fetchArticle(callback) {
      showListItem = callback      
      fetchPage();
    };

    function fetchPage() {
      var response = API.search({
        'search?page': pageNumber()
      }, fetchThumbnail);
    };

    function fetchThumbnail(response) {
      var id = parseAPIResponse(response)[_articleIndex].id;
      API.search({
        'show-fields': "thumbnail"
      }, responseHandler, id);
      _articleIndex++;
    };

    function responseHandler(response) {
      var article = parseAPIResponse(response);
      fetchedArticles.push(article);
      showListItem(article);
    };

    function parseAPIResponse(json) {
      return (json.response.results || json.response.content);
    };

    function pageNumber() {
      if (_articleIndex === 9) _pageNumber++;
      return _pageNumber;      
    };

    return {
      fetchArticle: fetchArticle,
    };

  };

})(this);
