(function(exports) {
  function NewsController(headlineList) {
    this.headlineList = headlineList;
  };
   NewsController.prototype.getHeadlineHTML = function(text) {
    var element = document.getElementById('news')
    return element.innerHTML = `<p>${text}</p>`;
  };
   exports.NewsController = NewsController;
})(this);