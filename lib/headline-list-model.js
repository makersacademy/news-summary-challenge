(function(exports) {
  function List() {
    this._list = [];
  };

  List.prototype.add = function (headlineModel) {
    this._list.push(headlineModel);
  };

  List.prototype.get = function () {
    return this._list;
  };

  exports.List = List;
})(this);
