(function(exports) {  
  function NewsController(headlinesView) {
    this._headlinesView = headlinesView;
  };

  NewsController.prototype.displayHeadlines = function() {
    var htmlString = this._headlinesView.createHTML();

    document.getElementById("app").textContent = htmlString;
  }

  exports.NewsController = NewsController;
})(this);