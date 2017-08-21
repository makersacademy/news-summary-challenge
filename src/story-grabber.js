(function(exports) {
  "use strict";

  var url = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/technology?show-fields=body,thumbnail";

  function StoryGrabber(xhttp, controller) {
    this._xhttp = xhttp;
    this._results = [];
    this._controller = controller;
  }

  StoryGrabber.prototype = {
    grabStories: function() {
      this._xhttp.open("GET", url, true);
      this._xhttp.send();
    },
    ready: function() {
      var self = this;
      this._xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          self._controller._results = this.responseText;
          console.log("ready!");
          self._controller.populateStories();
          self._controller.display();
        }
      };
    }
  };

exports.StoryGrabber = StoryGrabber;
})(this);
