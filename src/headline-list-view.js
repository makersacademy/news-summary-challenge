'use strict';

(function(exports) {

  function HeadlineView(headlineList) {
    this.headlineList = headlineList
  }

  HeadlineView.prototype.returnHTML = function(){
    var html = []
    this.headlineList.LIST.forEach(function(headline) {
      
    });
    return html;
  }

  exports.HeadlineView = Headline;
})(this);
