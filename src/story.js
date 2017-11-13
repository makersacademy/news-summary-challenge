;(function(exports)  {

function Story(storyHash) {
  this._headline = storyHash.webTitle;
  this._webUrl = storyHash.webUrl;
  this._thumbnail = storyHash.fields.thumbnail;
  this._aylienAPI = "https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarise?url=";

}

Story.prototype.getHeadline = function() {
  return this._headline;
};

  Story.prototype.summarise = function() {
    var xhr = new XMLHttpRequest();
    console.log("url :" + this._webUrl);
    var url = "https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarise?url=" + this.showWebUrl() ;
    console.log(url);
    xhr.onload = function() {
        if (this.status == 200) {
          console.log("HELLO");
           console.log(JSON.parse(xhr.responseText));
        }
    };

  xhr.open('GET', url, true);
  xhr.send();
};

Story.prototype.showThumbnail = function() {
  return this._thumbnail;
};

Story.prototype.showWebUrl = function() {
  return this._webUrl;
}

exports.Story = Story;

})(this);
