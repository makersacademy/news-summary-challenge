(function(exports) {
  function NewsController(headlineList, element, headlineView) {
    this.headlineList = headlineList;
    this.headlineView = headlineView;
    this.element = element;
  }

  NewsController.prototype.insertHTML = function() {
    console.log(this.headlineView);
    var string = this.headlineView.toHtml();
    console.log(string);
    this.element.innerHTML = string;
    return this.element.innerHTML;
  }

exports.NewsController = NewsController;
})(this);
