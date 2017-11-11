'use strict';

(function (exports) {
  exports.Article = function () {
    var _headline = '10 Ways To Have A Healthier Christmas!'
    var _summary = 'Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.'
    var _url = 'https://www.realbuzz.com/activities-interests/topics/festive-health-fitness/article/10-ways-to-a-healthier-christmas/'

    function showHeadline() {
      return _headline;
    }

    function showSummary() {
      return _summary;
    }

    function showUrlToFullStory() {
      return _url;
    }

    return {
      showHeadline: showHeadline,
      showSummary:  showSummary,
      showUrlToFullStory: showUrlToFullStory
    };
  };
})(this);