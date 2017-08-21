(function(exports){
  function StoryListModel() {
    this._stories = [];
  }

  StoryListModel.prototype.stories = function () {
    return this._stories;
  };

  StoryListModel.prototype.create = function (storyObject) {
    var story = new Story(storyObject)
    this._stories.push(story);
    return story;
  };




exports.StoryListModel = StoryListModel;
})(this);
