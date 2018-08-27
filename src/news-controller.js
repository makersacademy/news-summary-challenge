(function(exports) {
  function NewsController(headlineList) {
    this.headlineList = headlineList;
  };

  // the text to display will ultimately be injected from the headline-list-view.js
   NewsController.prototype.getHeadlineHTML = function(text) {
    var element = document.getElementById('news')
    return element.innerHTML = `<p>${text}</p>`;
  };
   exports.NewsController = NewsController;
})(this);