(function(exports) {  
  function NewsController(newsService, headlinesView) {
    this._newsService = newsService;
    this._headlinesView = headlinesView;
  };

  NewsController.prototype.displayHeadlines = function() {
    var headlinesView = this._headlinesView;

    this._newsService.getHeadlines((function(headlines) {
      return function(){
      var htmlString = headlinesView.createHTML(headlines);
      document.getElementById("app").textContent = htmlString;
      };
    }) ());
  }

  exports.NewsController = NewsController;
})(this);