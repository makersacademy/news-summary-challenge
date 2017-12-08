(function (exports) {
  function List (post) {
    this._list = []
    this._post = post

  }
  List.prototype = {
    addPost: function (headline, text) {
      return this._list.push(new Post(headline, text))
    },
    list: function () {
      return this._list
    }
  }
  exports.List = List
})(this)

var l = new List (new Post('headline', 'text'))

console.log(l.addPost('headline2', 'text2'))

console.log(l._list)
