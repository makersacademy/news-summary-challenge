"use strict";
function NewsFeed(newsFeed){
  this.list = [];

  (function(newsFeed) {
    function getFeed(string) {
      this.list.push(string);
    };

    newsFeed.getFeed = getFeed

  })(this);
}
