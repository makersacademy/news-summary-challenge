"use strict";

(function(exports) {

  function HeadlineList() {
    this.headlineListArray = [];
  };

  HeadlineList.prototype.addHeadlines = function(apiCall) {
    for(var i = 0; i < apiCall.response.results.length; i++) {
      var id = this.headlineListArray.length;
      var headline = new Headline(apiCall.response.results[i], id)
      this.headlineListArray.push(headline)
    };
  };

  exports.HeadlineList = HeadlineList;

})(this);
