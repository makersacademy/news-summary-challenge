'use strict';

;(function (exports) {

  exports.ListModel = function (API) {

    var articles = [];
    var pageNumber = 1;

    function fetchArticles() {
      var today = new Date().toISOString().slice(0, 10);
      var response = API.search({
        'search?from-date': today,
        'page': pageNumber
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
      fetchMoreArticlesIfLastItem(id);
    }

    function fetchMoreArticlesIfLastItem(id) {
      if (articles[id]) return;
      pageNumber++;
      fetchArticles();
    }

    return {
      fetchArticles: fetchArticles,
      getItem: getItem
    }

  }

})(this);
