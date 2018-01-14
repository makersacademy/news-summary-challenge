(function(exports){

  function Story(newsObject) {
    this.image = newsObject.fields.thumbnail;
    this.headline = newsObject.webTitle;
    this.webUrl = newsObject.webUrl;
    this.content = newsObject.fields.body;
  }

  Story.prototype.getHeadLine = function () {
    return this.headline;
  };

  Story.prototype.getImage = function () {
    return this.image;
  };

  Story.prototype.getWebUrl = function () {
    return this.webUrl;
  };

  Story.prototype.getContent = function () {
    return this.content;
  };

  exports.Story = Story;
})(this);
