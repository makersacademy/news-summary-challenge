'use strict';

(function (exports) {
  exports.Article = function (headline, summary, url, image) {
    
    _headline = headline;
    _summary = summary;
    _url = url;
    _image = image;

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