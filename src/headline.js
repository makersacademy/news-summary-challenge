'use strict';

(function(exports) {

  function Headline(title, body, imageURL) {
    this.TITLE = title;
    this.BODY = body;
    this.IMAGE = imageURL;
  }

  Headline.prototype.returnbody = function(){
    return this.BODY
  }

  exports.Headline = Headline;
})(this);
