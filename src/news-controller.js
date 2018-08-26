(function(exports) {
  function NewsController(element) {
    this.element = element;
  };
   NewsController.prototype.getHTML = function(text) {
    return this.element.innerHTML = `<p>${text}</p>`;
  };
   exports.NewsController = NewsController;
})(this);