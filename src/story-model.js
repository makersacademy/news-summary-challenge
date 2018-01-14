(function(exports){
  var idCount = 0;
  function Story(newsObject) {
    this.image = newsObject.fields.thumbnail;
    this.title = newsObject.webTitle;
    this.url = newsObject.webUrl;
    this.id = idCount++;
  }

  exports.Story = Story;
})(this);
