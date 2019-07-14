"use strict";

;(function(exports) {
  function Feed() {
    this.feed = [];
  };

  Feed.prototype = {
    get: function() {
      const feedData = fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=tapes%20AND%20president&tag=politics/politics&from-date=2016-01-01?show-fields=body");

      // execute function inside then() once all the data has finished downloading
      feedData .then(data => data.json());

      var result = feedData.reduce((accumulator, item) => { return [...accumulator, ...item.webTitle];}, 0)     
      this.feed.push(result);
    },

    fullFeed: function() {
      return this.feed;
    }
  };

  exports.Feed = Feed;
})(this);
