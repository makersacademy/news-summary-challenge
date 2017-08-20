(function(exports) {
  "use strict";

  function StoryController(element, storyList, storyViewModel, storyListViewModel) {
    this._element = element;
    this._storyList = storyList;
    this._storyViewModel = storyViewModel;
    this._storyListViewModel = storyListViewModel;
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
    }
  };

  exports.StoryController = StoryController;
})(this);
