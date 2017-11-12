'use strict';

;(function (exports) {

  exports.ListModel = function (API, listController) {

    var _pageNumber = 1;
    var _articleIndex = 0;
    var fetchedArticles = [];
    var showListItemCallBack;

    function fetchArticle(callback) {
      showListItemCallBack = callback;
      fetchPage();
    };

    function fetchPage() {
      API.search({
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
      showListItemCallBack(article);
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
