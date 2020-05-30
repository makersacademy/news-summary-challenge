(function (exports) {
  function Controller(headlinesListView) {
    this.view = headlinesListView;
  }

  Controller.prototype.insertView = function () {
    let element = document.getElementById('headlines');
    element.innerHTML = this.view.addHTMLTags();
  };

  exports.Controller = Controller;
})(this);
