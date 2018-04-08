(function(exports) {
  function List() {
    this._list = [];
  };

  List.prototype.add = function (headline, image) {
    this._list.push(new Article(headline, image));
  };

  List.prototype.get = function () {
    return this._list;
  };

  exports.List = List;
})(this);
