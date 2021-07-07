(function(exports) {

  function HeadlinesController(headlinesView, element) {
    this._headlinesView = headlinesView;
    this._element = element;
  };

  HeadlinesController.prototype.headlinesView = function () {
    return this._headlinesView;
  };

  HeadlinesController.prototype.element = function () {
    return this._element;
  };

  HeadlinesController.prototype.insertHTML = function() {
    this._element.innerHTML = this._headlinesView.parse();
  };

  exports.HeadlinesController = HeadlinesController;

})(this)
