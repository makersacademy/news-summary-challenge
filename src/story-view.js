(function(exports){
  function StoryData(contents = new NewsContent()) {
    this._content = contents;
  }

  StoryData.prototype._getWebTitles = function(){
    var webTitles = this._content.showContents().map(function(hash) {
      return hash["webTitle"];
    });
    return webTitles;
  };

StoryData.prototype.webTitlesUlArray = function(){
  var webTitles = this._getWebTitles();
  var ulArray = webTitles.map(function(webtitle, index){
    return "<li id=" + index + "><div>" + webtitle + "</div></li>";
  });
  return "<ul>" + ulArray.join('') + "</ul>";
};

  StoryData.prototype.getWebUrlAtIndex = function(index){
    var webUrls = this._content.showContents().map(function(hash) {
      return hash["webUrl"];
    });
    return webUrls[index];
  };

  exports.StoryData = StoryData;
})(this);
