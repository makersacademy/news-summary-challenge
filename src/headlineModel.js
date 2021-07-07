"use strict";

(function(exports) {

  function Headline(headline, id) {
    this.headline = headline;
    this.id = id;
  };

  Headline.prototype.text = function() {
    return this.headline.webTitle;
  };

  exports.Headline = Headline;

})(this);
