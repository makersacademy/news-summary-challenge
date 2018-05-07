(function(exports) {
  function List(){
    this.storage = [];
  }

  List.prototype.add = function(object) {
    this.storage.push(object);

  }

  exports.List = List;
})(this)
