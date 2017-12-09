(function(exports) {
function StoryList() {
  this._stories = [];
}

StoryList.prototype.getStories = function() {
  return this._stories;
};

exports.StoryList = StoryList;

})(this);
