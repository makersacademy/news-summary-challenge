(function(exports) {
  function Controller(list) {
    this._list = list;
  };

  Controller.prototype.render = function() {
    var view = new View(this._list);
    document.getElementById('app').innerHTML = view.render();
  };

  exports.Controller = Controller;
})(this);
