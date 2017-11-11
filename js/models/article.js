'use strict';

(function (exports) {
  exports.Article = function () {
    var _headline = "Where have all the bees gone?"

    function showHeadline() {
      return _headline;
    }

    return {
      showHeadline: showHeadline
    };
  };
})(this);