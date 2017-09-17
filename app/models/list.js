(function(exports) {

  function List() {
    this.list = [];
  };

  List.prototype.input = function(input) {
    this.list.push(input);
  };

  List.prototype.getList = function() {
    return this.list;
  };

  exports.List = List;
})(this);
