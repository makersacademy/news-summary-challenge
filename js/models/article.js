'use strict';

(function (exports) {
  exports.Article = function () {
    var _headline = 'How to be healthy this Christmas!'
    var _summary = 'Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.'

    function showHeadline() {
      return _headline;
    }

    function showSummary() {
      return _summary;
    }

    return {
      showHeadline: showHeadline,
      showSummary:  showSummary
    };
  };
})(this);