(function (exports) {

  function Story(newsObject) {
    this._image = newsObject.fields.thumbnail;
    this._headline = newsObject.webTitle;
    this._webUrl = newsObject.webUrl;
    this._content = newsObject.fields.body;
  }

  Story.prototype.headline = function () {
    return this._headline;
  };

  Story.prototype.image = function () {
    return this._image;
  };

  Story.prototype.webUrl = function () {
    return this._webUrl;
  };

  Story.prototype.content = function () {
    return this._content;
  };

  exports.Story = Story;
})(this);
