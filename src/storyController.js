(function(exports) {
  function StoryController(storyListView) {
    this.text = storyListView.returnList();
  };

  StoryController.prototype.updateText = function () {
    document.getElementById('story').innerHTML = this.text;
  };

  exports.StoryController = StoryController;
})(this);
