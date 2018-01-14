(function(exports){
  var idCount = 0;
  function Story(newsObject) {
    this.image = newsObject.fields.thumbnail;
    this.title = newsObject.webTitle;
    this.url = newsObject.webUrl;
    this.id = idCount++;
  }

  Story.prototype.getTitle= function () {
    return this.title;
  };

  Story.prototype.getID= function () {
    return this.id;
  };

  exports.Story = Story;
})(this);
