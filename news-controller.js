(function(exports) {
  function NewsController(api) {
    this._api = api;
    this._headlines = new HeadlinesView(api);
  };

  NewsController.prototype = {
    render: function(element = document.getElementById("headlines")) {
      element.innerHTML = this._headlines.html();
    }
  };

  exports.NewsController = NewsController;

})(this);
