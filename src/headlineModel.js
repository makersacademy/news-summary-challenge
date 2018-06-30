"use strict";

(function(exports) {

  function Headline(headlines) {
    this.headlines = headlines;
  };

  Headline.prototype.text = function() {
    return this.headlines.webTitle;
  };

  exports.Headline = Headline;

})(this);
