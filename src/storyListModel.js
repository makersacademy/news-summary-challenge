(function(exports) {
  function StoryList() {
    this.stories = new Array()
  };

  StoryList.prototype.create = function(headline,summary) {
    this.stories.push(new Story(headline,summary));
  };

  
  exports.StoryList = StoryList 
})(this)