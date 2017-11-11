(function(exports) {

  HeadlineController = function() {
    this._list= new HeadlinesList();
    this._view = new HeadlinesView(this._list);
  };

  HeadlineController.prototype.getView = function() {
    return this._view;
  };

  HeadlineController.prototype.displayHeadlines = function() {
    var element = document.getElementById("allHeadlines")
    var currentView = this.getView();
    element.innerHTML = currentView.toHTML();
  };

  exports.HeadlineController = HeadlineController
})(this);

// window.onload = function() {
//   var headlineController = new HeadlineController();
//   headlineController.displayHeadlines();
// };
