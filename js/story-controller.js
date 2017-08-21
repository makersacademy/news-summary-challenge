(function(exports){
  function StoryController(element) {
    this._element = element
    this._storyListModel = new StoryListModel();
    this._storyListView = new StoryListView();
  }

  StoryController.prototype = {
      createStory: function(storyObject) {
        console.log(this._storyListModel);
        this._storyListModel.create(storyObject);
        this.displayList();
      },

      displayList: function() {
        var storyList = this._storyListModel.stories();
        this._element.innerHTML = this._storyListView.toHtml(storyList);
      },

    };

exports.StoryController = StoryController;
})(this);
