(function(exports) {
  function List() {
    this._list = [];
  };

  List.prototype.add = function (headlineText) {
    this._list.push(new Headline(headlineText));
  };

  List.prototype.get = function () {
    return this._list;
  };

  exports.List = List;
})(this);
