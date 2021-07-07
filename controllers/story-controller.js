(function(exports) {

  function StoryController(storyView, element) {
    this._storyView = storyView;
    this._element = element;
  }

  StoryController.prototype.storyView = function () {
    return this._storyView;
  };

  StoryController.prototype.element = function () {
    return this._element;
  };

  StoryController.prototype.insertHTML = function () {
    this._element.innerHTML = this._storyView.parse();
  };

  exports.StoryController = StoryController;
})(this);
