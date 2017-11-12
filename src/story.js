(function(exports)  {
  function Story() {
  this._headline = storyHash.webTitle;
  this.webUrl = storyHash.webUrl;
  this._thumbnail = storyHash.fields.thumbnail;
};

Story.prototype.showHeadline() {
  return this._headline;
};

  Story.prototype.summarise() {
  var xhr = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarise?url=" + this.webUrl ;
  xhr.open('GET', url, false);
  xhr.send();
  var text = JSON.parse(xhr.responseText);
  console.log(text);
};

Story.prototype.showThumbnail() {
  return this._thumbnail;
};

exports.Story = Story;

})(this);
