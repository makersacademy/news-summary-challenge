"use strict";

;(function(exports) {
   function Stories() {
    this._storyObjects = [];
    // this._guardianUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/?q=uk&show-fields=body";
    this._guardianUrl = "https://content.guardianapis.com/search?show-fields=body&api-key=301c8978-6b59-4980-9593-5c8d085394e7";
  };

  Stories.prototype.storiesList = function() {
    var results = guardianAPI(this._guardianUrl);
    for(var i = 0; i < results.length; i++){
      var story = new Story(results[i]);
      this._storyObjects.push(story);
    }
    return this._storyObjects;
  };


exports.Stories = Stories;
})(this);
