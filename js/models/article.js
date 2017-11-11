'use strict';

(function (exports) {
  exports.Article = function () {
    
    _headline = '10 Ways To Have A Healthier Christmas!'
    _summary = 'Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.'
    _url = 'https://www.realbuzz.com/activities-interests/topics/festive-health-fitness/article/10-ways-to-a-healthier-christmas/'
    _image = 'https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/30d7070bbc7a7a40e0aaa7f2a275c599139a/i1080x475.jpg'

    function showHeadline() {
      return _headline;
    }

    function showSummary() {
      return _summary;
    }

    function showUrlToFullStory() {
      return _url;
    }

    function featureImage() {
      return _image;
    }

    return {
      showHeadline: showHeadline,
      showSummary:  showSummary,
      showUrlToFullStory: showUrlToFullStory,
      featureImage: featureImage
    };
    
    var _headline, _summary, _url, _image
  };
})(this);