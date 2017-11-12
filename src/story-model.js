(function(exports){
  function StoryData(contents = new NewsContent()) {
    this._content = contents;
  }

  StoryData.prototype.getWebTitles = function(){
    var webTitles = this._content.showContents().map(function(hash) {
      return hash["webTitle"];
    });
    return webTitles;
  };

StoryData.prototype.webTitlesUlArray = function(){
  var webTitles = this.getWebTitles();
  var ulArray = webTitles.map(function(webtitle, index){
    return "<li id=" + index + "><div>" + webtitle + "</div></li>";
  });
  return "<ul>" + ulArray.join('') + "</ul>";
};

  StoryData.prototype.getWebUrls = function(){
    var webUrls = this._content.showContents().map(function(hash) {
      return hash["webUrl"];
    });
    return webUrls;
  };

  exports.StoryData = StoryData;
})(this);
