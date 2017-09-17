(function(exports) {

  function ListController(list) {
    this.list = list;
  };

  ListController.prototype.printElement = function() {
    var element = document.getElementById('headlines');
    console.log(element);
  };

  ListController.prototype.changeElement = function() {
    var getList = this.list.list;
    console.log(getList);
    document.getElementById('headlines').innerHTML = "<li><div>" + getList + "</div></li>";
  };

  exports.ListController = ListController;
})(this);
