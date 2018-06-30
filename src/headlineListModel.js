"use strict";

(function(exports) {

  function HeadlineList() {
    this.headlineListArray = [];
  };

  HeadlineList.prototype.addHeadlines = function(APIcall) {
    for(var i = 0; i < APIcall.results.length; i++) {
      var id = this.headlineListArray.length;
      var headline = new Headline(APIcall.results[i], id)
      this.headlineListArray.push(headline)
    };
  };

  exports.HeadlineList = HeadlineList;

})(this);
