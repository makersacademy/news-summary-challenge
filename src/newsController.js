(function(exports) {
  function NewsController(element) {
    this.element = element;
  };

  NewsController.prototype.getHTML = function () {
    this.element.innerHTML = "hello!";
  };

  exports.NewsController = NewsController;
})(this);
