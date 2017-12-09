(function (exports) {
  var id = 0;

  function reset () {
    id = 0;
  }

  function Post (headline, text) {
    this._headline = headline;
    this._text = text;
    this._id = id;
    id++;
  }

  Post.prototype.text = function () {
    return this._text;
  };
  Post.prototype.headline = function () {
    return this._headline;
  };
  Post.prototype.id = function () {
    return this._id;
  };

  exports.Post = Post;
  exports.reset = reset;
})(this);
