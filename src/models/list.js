'use strict';

(function (exports) {

  exports.List = function (API) {

    function fetchHeadlines() {
      var today = new Date().toISOString().slice(0, 10);
      var results = API.search({
        'from-date': today
      });
      return results;
    }

    return {
      fetchHeadlines: fetchHeadlines,
    }

  }

})(this);
