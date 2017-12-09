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
  };

  List.prototype.headers = function () {
    var headersArray = [];
    this._list.forEach(function (post) {
      console.log(post.headline());
      headersArray.push(post.headline());
    });
    console.log(headersArray);
    return headersArray;
  };


  exports.List = List;
})(this);

// var l = new List (new Post('headline', 'text'))
//
// console.log(l.addPost('headline2', 'text2'))
//
// console.log(l._list)
