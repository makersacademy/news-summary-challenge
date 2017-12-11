(function (exports) {
  function List (post = Post) {
    this._list = [];
    this._post = post;
  }

  List.prototype.addPost = function (headline, text) {
    return this._list.push(new this._post(headline, text));
  };

  List.prototype.list = function () {
    return this._list;
    console.log(this_list)
  };

  List.prototype.headers = function () {
    var headersArray = [];
    this._list.forEach(function (post) {
      headersArray.push(post.headline());
    });
    return headersArray;
  };


  exports.List = List;
})(this);
