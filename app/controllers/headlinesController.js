(function(exports) {

  HeadlineController = function() {
    this._list= new HeadlinesList();
    this._view = new HeadlinesView(this._list);
  };

  HeadlineController.prototype.renderView = function() {
    return this._view;
  };

  HeadlineController.prototype.displayHeadlines = function() {
    var element = document.getElementById("allHeadlines")
    var pageView = this.renderView();
    element.innerHTML = pageView.toHTML();
  };

  exports.HeadlineController = HeadlineController
})(this);

// window.onload = function() {
//   var headlineController = new HeadlineController();
//   headlineController.displayHeadlines();
// };
