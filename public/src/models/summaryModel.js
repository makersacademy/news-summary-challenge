'use strict';

;(function (exports) {
  
  exports.SummaryModel = function (API) {
    
    var article;
    var showSummaryCallback;

    function fetchSummary(item, callback) {
      showSummaryCallback = callback;
      article = item;
      API.search(article.webUrl, responseHandler);
    };

    function responseHandler(response) {
      article['summary'] = response;
      showSummaryCallback(article);
    };
  
    return {
      fetchSummary: fetchSummary
    };

  };

})(this);
