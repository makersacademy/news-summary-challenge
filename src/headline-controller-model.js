(function(exports) {
  function HeadlineController(headlineList) {
    headlineView = new HeadlineView(headlineList)
  };

  HeadlineController.prototype.addHTML = function () {
    element = document.getElementById("app")
    element.innerHTML = headlineView.returnHTML();
    return element.innerHTML
  };

  exports.HeadlineController = HeadlineController
})(this);
