(function(exports) {
  "use strict";

  function StoryController(element, storyList, storyViewModel, storyListViewModel, storyGrabberModel, xhttp) {
    this._results = [];
    this._element = element;
    this._storyList = storyList;
    this._storyViewModel = storyViewModel;
    this._storyListViewModel = storyListViewModel;
    this._xhttp = xhttp;
    this._storyGrabber = new storyGrabberModel(this._xhttp, this);
    this._storyGrabber.ready();
    this._storyListView = new this._storyListViewModel(this._storyList);
    this.eventListener();
  }

  StoryController.prototype = {
    display: function() {
      this._element.innerHTML = this._storyListView.toHtml();
    },
    displayStory: function() {
      var id = window.location.hash.split('/')[1];
      var story = this._storyList.all()[id];
      var storyView = new this._storyViewModel(story);
      this._element.innerHTML = storyView.toHtml();
    },
    eventListener: function() {
      var self = this;
      window.addEventListener("hashchange", function(){
        if (event.newURL.includes('stories/')) {
          self.displayStory();
        } else if (event.newURL.includes('all')) {
          self.display();
        }
      });
    },
    grabStories: function() {
      this._storyGrabber.grabStories();
    },
    populateStories: function() {
      var self = this;
      JSON.parse(self._results).response.results.forEach(function(story) {
        var text = story.fields.body;
        var title = story.webTitle;
        var url = story.fields.thumbnail;
        self._storyList.create(text, title, url);
      });
      console.log(self);
      self.display();
    }
  };

  exports.StoryController = StoryController;
})(this);
