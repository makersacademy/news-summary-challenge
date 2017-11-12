'use strict';

(function (exports) {
  exports.Article = function (headline, url, image, summary) {
    headline = headline;
    url = url;
    image = image;
    summary = summary;

    function showHeadline() {
      return headline;
    }

    function showSummary() {
      return summary;
    }

    function showUrlToFullStory() {
      return url;
    }

    function featureImage() {
      return image;
    }

    return {
      showHeadline: showHeadline,
      showSummary: showSummary,
      showUrlToFullStory: showUrlToFullStory,
      featureImage: featureImage
    };

    var headline, url, image, summary
  };
})(this);