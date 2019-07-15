(function(exports) {

  function NewsStoryList() {
    this.listOfStories = []
  };

  NewsStoryList.prototype.addToList = function(jsonData, JSONConverterConstructor = JSONConverter) {
    var arrayOfNewsStoryObjects = []
    jsonData.forEach(function(jsonHash) {
      var createdNewsStory = (new JSONConverter).convertHashToNewsStoryObject(jsonHash)
      arrayOfNewsStoryObjects.push(createdNewsStory)
    })
    this.listOfStories = arrayOfNewsStoryObjects
  };

  exports.NewsStoryList = NewsStoryList;
})(this);
