'use strict';

(function (exports) {

  exports.News = function (guardianAPI) {

    function fetchHeadlines() {
      var today = new Date().toISOString().slice(0, 10);
      var results = guardianAPI.search({
        'from-date': today
      });
      return results;
    }

    return {
      fetchHeadlines: fetchHeadlines,
    }

  }

})(this);
