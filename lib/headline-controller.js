(function(exports) {
  function Controller(headlineList) {
    this._list = headlineList;
  };

  Controller.prototype.render = function() {
    var view = new View(this._list);
    document.getElementById('app').innerHTML = view.render();
  };

  exports.Controller = Controller;
})(this);
