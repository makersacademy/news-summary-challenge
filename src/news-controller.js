//lets wrap this in an iife. then really interrogate afterwards what I made private and why.

(function(exports){
  function NewsController(element, headline){
    this.element = element
    this.headline = headline
  };

  NewsController.prototype.inputHTMLtoDOM = function () {
    this.element.innerHTML = this.headline
  };

  exports.NewsController = NewsController
})(this);

var element = document.getElementById('app');
var headline = "Breaking news just in:"
var newsController = new NewsController(element, headline);
newsController.inputHTMLtoDOM();
