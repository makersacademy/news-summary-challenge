(function (exports) {
  function List() {
    this.stories = [];
  };

  List.prototype.addStory = function(newsObject) {
    var story = new Story(newsObject)
    this.stories.push(story);

  };

  List.prototype.findStoryById = function(id) {
    return this.stories.filter(function(story) {
        return story.id === id;
    })[0];

  };

  exports.List = List;
})(this);
