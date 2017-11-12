var Story = function(storyHash) {
  this._headline = storyHash.webTitle;
  this.webUrl = storyHash.webUrl
};

Story.prototype.showHeadline = function() {
  return this._headline;
};


Story.prototype.summarise = function() {
  var xhr = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarise?url=" + this.webUrl ;

console.log(url);
xhr.open('GET', url, false);
xhr.send();
var text = JSON.parse(xhr.responseText);
console.log(text);
}
