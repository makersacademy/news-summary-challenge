(function(exports) {
  function NewsController(api = new Api) {
    this._api = api;

    NewsController.prototype.getData = function() {
       return api.data();
    };
  }
  exports.NewsController = NewsController;
})(this);


controller = new NewsController();
data       = controller.getData();
render     = new RenderNews(data);
render.allNews();
