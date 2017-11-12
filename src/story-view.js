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
  var ulArray = this._getWebTitles().map(function(webtitle, index){
    return "<a href=#" + index + ">" + webtitle + "</a><br>";
  });
  return  ulArray.join('');
};

  StoryData.prototype.getWebUrlAtIndex = function(index){
    var webUrls = this._content.showContents().map(function(hash) {
      return hash["webUrl"];
    });
    return webUrls[index];
  };

  exports.StoryData = StoryData;
})(this);
