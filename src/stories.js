"use strict";

;(function(exports) {
 function Stories() {
  this._storyObjects = [];
  // this._guardianUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/?q=uk&show-fields=body";
  this._guardianUrl = "https://content.guardianapis.com/search?show-fields=body&api-key=301c8978-6b59-4980-9593-5c8d085394e7"

  var self = this;

  var resultsCallback =  function(results){
    var headlinesElement = document.getElementById("headlines");
    for(var i = 0; i < results.length; i++){
      var story = new Story(results[i]);
      self._storyObjects.push(story);

      var html = '<li class="news" id="news-' + i + '">' + story.getHeadline() + '</li>';
      console.log("This is the result: " + html);

      headlinesElement.innerHtml += html;
      console.log(headlinesElement.innerHtml);
    };
  };

  var errorCallback = function(errorString){
    console.log(errorString);
  };

  guardianAPI(this._guardianUrl, resultsCallback, errorCallback);

};


exports.Stories = Stories;
})(this);
