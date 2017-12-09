(function(exports) {
  function NewsController(api = new Api) {
    this._api = api;

    NewsController.prototype.getData = function() {
       return this._api.data();
    };
  }
  exports.NewsController = NewsController;
})(this);


// controller = new NewsController();
// data       = controller.getData();
// console.log('wow' , data[0])
// render     = new RenderNews(data);
// render.allNews();

var data = []
controller = new NewsController();
function mySandwich(callback) {
  data.push(controller.getData());
  console.log('1', data)

    console.log('wow', data.length)
  };
  callback();
}

mySandwich(function() {
  var render     = new RenderNews(data);
  console.log('2', render._data[0])
  render.allNews();
});
