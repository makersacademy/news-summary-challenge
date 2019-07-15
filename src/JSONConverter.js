(function(exports) {

  function JSONConverter() {};

  JSONConverter.prototype.convertHashToNewsStoryObject = function(JSONhash, NewsStoryConstructor = NewsStory) {
    return new NewsStoryConstructor(JSONhash.webTitle, JSONhash.webUrl, JSONhash.id)
  }

  exports.JSONConverter = JSONConverter
})(this);
